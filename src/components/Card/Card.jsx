import React from 'react';
import styles from './Card.css';

const Card = ({ header, metadata, title, subtitle, description }) => {
  return (
    <div className={styles.Card}>
      <h3>{header}</h3>
      <span>{metadata}</span>
      <p>{title}</p>
      <p>{subtitle}</p>
      <p>{description}</p>
    </div>
  );
};

export default Card;
