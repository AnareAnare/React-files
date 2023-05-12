import React from 'react';
import styles from './user.css';
import avatar from '../../../../../../img/avatar.jpg';

interface IAuthor {
  author: string;
  ava: string;
}

export function User({ author, ava }: IAuthor) {
  return (
    <div className={styles.userLink}>
      {ava
        ? <img className={styles.avatar} src={ava} alt="avatar" />
        : <img className={styles.avatar} src={avatar} alt="avatar" />}
      <a className={styles.username} href="#user-url">{author}</a>
    </div>
  );
}
