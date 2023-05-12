import React, { useEffect, useRef, useState } from 'react';
import { Card } from './Card/Card';
import styles from './cardslist.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, updateCount } from '../../store/reducer';
import { postRequestAsync } from '../../store/posts/postsactions';
import { Outlet } from 'react-router-dom';

interface IPostsData {
  author: string;
  id?: string;
  created: number;
  num_comments?: number;
  score?: number;
  subreddit?: string;
  title: string;
  thumbnail?: string;
  sr_detail?: { icon_img?: string };
  selftext?: string;
}

interface IOnlyPosts {
  data: IPostsData[];
}

interface IPostsInfo {
  posts: IPostsData[];
  loading: boolean;
  errorLoading: string;
}

export function CardsList() {
  const posts = useSelector<RootState, IPostsData[]>(state => state.posts.posts);
  const loading = useSelector<RootState, boolean>(state => state.posts.loading);
  const isError = useSelector<RootState, string>(state => state.posts.error);
  const bottomOfList = useRef<HTMLDivElement>(null);
  const token = useSelector<RootState, string>(state => state.token.token);
  const count = useSelector<RootState, number>(state => state.count);
  const [loadMore, setLoadMore] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!token || token === 'undefined') return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (count === 2) {
          setLoadMore(true)
          return;
        }
        dispatch(postRequestAsync());
      }
    }, {
      rootMargin: '10px',
    });
    if (bottomOfList.current) {
      observer.observe(bottomOfList.current);
    }
    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current);
      }
    }
  }, [token, bottomOfList.current, count])

  return (
    <>
      <ul className={styles.cardsList}>
        {posts.map((post) => <Card key={post.id} props={post} />)}
        <div ref={bottomOfList} />
        {loading && (
          <div className={styles.load}>
            Загрузка...
          </div>
        )}
        {loadMore && (
          <div className={styles.load} onClick={() => { dispatch(updateCount(0)); setLoadMore(false); }}>
            <button className={styles.buttonMore}>Загрузить еще</button>
          </div>
        )}
        {isError && (
          <div role="alert" className={styles.load}>
            {isError}
          </div>
        )}
        {posts.length === 0 && !loading && !isError && (
          <div className={styles.load}>
            Нет ни одного поста!
          </div>
        )}
      </ul>
      <Outlet />
    </>
  );
}
