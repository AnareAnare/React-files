import React from 'react';
import styles from './sharebutton.css';
import classNames from 'classnames';
import { EIcons, Icon } from '../../../../../Icon';

interface IButtonDisplay {
  mobileDisplay?: boolean;
  desktopDisplay?: boolean;
  comm?: boolean;
}

export function ShareButton({ mobileDisplay, desktopDisplay, comm }: IButtonDisplay) {
  const classes = classNames(
    styles.shareButton,
    { [styles.dd]: desktopDisplay },
    { [styles.md]: mobileDisplay },
    { [styles.comm]: comm },
  );
  return (
    <>
      <button className={classes}>
        <span className={styles.mobileIcon}>
          <Icon icon={EIcons.sharemobile} />
        </span>
        <span className={styles.desktopIcon}>
          <Icon icon={EIcons.sharedesk} />
        </span>
        <span className={styles.text}>Поделиться</span>
      </button>
    </>
  );
}
