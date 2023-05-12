import React from 'react';
import { EIcons, Icon } from '../../../Icon';
import styles from './menubutton.css';

export function MenuButton() {

  return (
    <div className={styles.menu}>
      <button className={styles.menuButton}>
        <Icon icon={EIcons.menu} />
      </button>
    </div>
  );
}
