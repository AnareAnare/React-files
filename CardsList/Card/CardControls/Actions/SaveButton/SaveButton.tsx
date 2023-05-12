import React from 'react';
import styles from './savebutton.css';
import classNames from 'classnames';
import { EIcons, Icon } from '../../../../../Icon';

interface IButtonDisplay {
  mobileDisplay?: boolean;
  desktopDisplay?: boolean;
}

export function SaveButton({ mobileDisplay, desktopDisplay }: IButtonDisplay) {
  const classes = classNames(
    styles.saveButton,
    { [styles.dd]: desktopDisplay },
    { [styles.md]: mobileDisplay },
  );
  return (
    <>
      <button className={classes}>
        <span className={styles.mobileIcon}>
          <Icon icon={EIcons.savemobile} />
        </span>
        <span className={styles.desktopIcon}>
          <Icon icon={EIcons.savedesk} />
        </span>
        <span className={styles.text}>Сохранить</span>
      </button>
    </>
  );
}
