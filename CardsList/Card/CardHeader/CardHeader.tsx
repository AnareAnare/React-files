import React from 'react';
import styles from './cardheader.css';
import { CardTitle } from './CardTitle';
import { MetaData } from './MetaData';

interface ITitle {
  title: string;
  created: number;
  author: string;
  ava: string;
  id?: string;
  text?: string;
  image?: string;
  value?: number;
  comm?: number;
}

export function CardHeader( {title, created, author, ava, id, text, image, value, comm}: ITitle ) {
  return (
    <div className={styles.textContent}>
      <MetaData created={created} author={author} ava={ava} />
      <CardTitle title={title} created={created} author={author} ava={ava} id={id} text={text} image={image} value={value} comm={comm} />
    </div>
  );
}
