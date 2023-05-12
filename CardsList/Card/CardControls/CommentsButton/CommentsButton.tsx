import React from 'react';
import styles from './commentsbutton.css';
import classNames from 'classnames';
import { EIcons, Icon } from '../../../../Icon';

interface IButtonDisplay {
  mobileDisplay?: boolean;
  desktopDisplay?: boolean;
  comm?: number;
}

export function CommentsButton({mobileDisplay, desktopDisplay, comm}: IButtonDisplay ) {
  const classes = classNames(
    styles.commentsButton,
    { [styles.dd]: desktopDisplay },
    { [styles.md]: mobileDisplay },
  );
  return (
    <>
      <button className={classes}>
        <Icon icon= {EIcons.comment} />
        <span className={styles.commentsNumber}>{comm}</span>
        <span className={styles.text}>Комментарии</span>
      </button>
    </>
  );
}
