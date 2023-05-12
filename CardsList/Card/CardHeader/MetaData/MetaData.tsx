import React from 'react';
import styles from './metadata.css';
import { User } from './User';
import { countData } from '../../../../../utils/js/countData';
import classNames from 'classnames';

interface IData {
  created: number;
  author: string;
  ava: string;
  flexRow?: boolean;
  disp?: boolean;
}

export function MetaData( {created, author, ava, flexRow, disp}: IData ) {
  const time = countData(created);
  const classes = classNames(
    styles.metaData,
    { [styles.flex]: flexRow },
  );
  const display = classNames(
    styles.publishedLabel,
    { [styles.display]: disp },
  );
  return (
    <div className={classes}>
      <User author={author} ava={ava} />
      <span className={styles.createdAt}>
        <span className={display}>опубликовано </span>
        {time}
      </span>
    </div>
  );
}
