import React from 'react';
import { Actions } from './Actions';
import styles from './cardcontrols.css';
import { CommentsButton } from './CommentsButton';
import { KarmaCounter } from './KarmaCounter';

interface ICardControls {
  value?: number;
  comm?: number;
}

export function CardControls( {value, comm}: ICardControls ) {
  return (
    <div className={styles.controls}>
      <KarmaCounter value={value} />
      <CommentsButton desktopDisplay comm={comm} />
      <Actions />
    </div>
  );
}
