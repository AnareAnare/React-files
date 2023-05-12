import React from 'react';
import { EIcons, Icon } from '../../../../Icon';
import styles from './menubuttonhide.css';

export function MenuButtonHide() {
  return (
    <>
      <button className={styles.hideButton}>
        <Icon icon={EIcons.hide} mobileSise={12} desktopSize={14} />
        <span className={styles.text}>Скрыть</span>
      </button>
    </>
  );
}
