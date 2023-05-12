import classNames from 'classnames';
import React from 'react';
import { EIcons, Icon } from '../../../../Icon';
import styles from './menubuttoncomplain.css';

interface IButtonComplain {
  comm?: boolean;
}

export function MenuButtonComplain({comm}: IButtonComplain) {
  const classes = classNames(
    styles.complainButton,
    { [styles.comm]: comm },
  );
  return (
    <>
      <button className={classes}>
        <Icon icon={EIcons.claim} mobileSise={14} desktopSize={16} />
        <span className={styles.text}>Пожаловаться</span>
      </button>
    </>
  );
}
