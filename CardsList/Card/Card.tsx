import React from 'react';
import { useUserAvatar } from '../../../hooks/useUserAvatar';
import styles from './card.css';
import { CardControls } from './CardControls';
import { CardDropdownMenu } from './CardDropdownMenu';
import { CardHeader } from './CardHeader';
import { CardPreview } from './CardPreview';

interface IPostsData {
  author: string;
  id?: string;
  created: number;
  num_comments?: number;
  score?: number;
  subreddit?: string;
  title: string;
  thumbnail?: string;
  sr_detail?: {icon_img?: string};
  selftext?: string;
}

export function Card( {props}: {props: IPostsData} ) {
  const { author, id, created, num_comments, score, subreddit, title, thumbnail, sr_detail, selftext } = props;
  const avatar: string = useUserAvatar(author);
  return (
    <li className={styles.card}>
      <CardHeader title={title} created={created} author={author} ava={avatar} id={id} text={selftext} image={thumbnail} value={score} comm={num_comments} />
      <CardDropdownMenu />
      <CardPreview image={thumbnail} />
      <CardControls value={score} comm={num_comments} />
    </li>
  );
}
