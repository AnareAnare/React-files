import React, { MouseEventHandler } from 'react';
import { EIcons, Icon } from '../../../../Icon';
import styles from './answerbutton.css';

interface IAnswerButton {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function AnswerButton({onClick}: IAnswerButton) {
  return (
    <>
      <button className={styles.answer} onClick={onClick}>
        <Icon icon= {EIcons.comment} />
        <span className={styles.text}>Ответить</span>
      </button>
    </>
  );
}
