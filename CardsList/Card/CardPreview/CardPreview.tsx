import React from 'react';
import styles from './cardpreview.css';
import preview from '../../../../img/preview.jpg';

interface IImage {
  image?: string;
}

export function CardPreview({ image }: IImage) {
  return (
    <div className={styles.preview}>
      {image && (image.substring(image.length - 4) === '.jpg')
        ? <img className={styles.previewImg} src={image} alt="Превью" />
        : <img className={styles.previewImg} src={preview} alt="Превью" />
      }
    </div>
  );
}
