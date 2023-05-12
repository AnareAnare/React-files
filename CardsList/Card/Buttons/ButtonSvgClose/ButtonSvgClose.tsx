import React from 'react';
import { PostCloseIcon } from '../../../../Icons';
import styles from './buttonsvgclose.css';

interface IButtonSvgClose {
  onClose: () => void;
}

export function ButtonSvgClose({onClose}: IButtonSvgClose) {
  return (
    <>
    <button className={styles.close} onClick={ () => {onClose()} }>
      <PostCloseIcon />
    </button>
    </>
  );
}
