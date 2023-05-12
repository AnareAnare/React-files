import React from 'react';
import styles from './menubuttonclose.css';

export function MenuButtonClose() {
  return (
    <>
      <button className={styles.closeButton}>
        <span className={styles.text}>Закрыть</span>
      </button>
    </>
  );
}
