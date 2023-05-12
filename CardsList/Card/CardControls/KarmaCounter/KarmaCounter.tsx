import classNames from 'classnames';
import React from 'react';
import styles from './karmacounter.css';

interface IKarma {
  value?: number;
  flexRow?: boolean;
  pd?: boolean;
  pdown?: boolean;
}

export function KarmaCounter( {value, flexRow, pd, pdown}: IKarma ) {
  const classes = classNames(
    styles.karmaCounter,
    { [styles.flex]: flexRow },
  );
  const padding = classNames(
    styles.karmaValue,
    { [styles.pd]: pd },
  );
  const pDown = classNames(
    styles.down,
    { [styles.pdown]: pdown },
  );
  return (
    <div className={classes}>
      <button className={styles.up}>
        <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4" />
        </svg>
      </button>
      <span className={padding}>{value}</span>
      <button className={pDown}>
        <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4" />
        </svg>
      </button>
    </div>
  );
}
