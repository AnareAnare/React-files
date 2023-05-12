import React, { useState } from 'react';
import { Post } from '../../../../Post';
import styles from './cardtitle.css';
import { Link, Route, Routes } from 'react-router-dom';

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

export function CardTitle({ title, created, author, ava, id, text, image, value, comm }: ITitle) {
  return (
    <>
      <h2 className={styles.title}>
        <Link className={styles.postLink} to={`/posts/${id}`}>
          {title}
        </Link>
      </h2>
    </>
  );
}
