import React from 'react';
import styles from './Avatar.css';

const Avatar = ({ avatarUrl, alt }) => {
  return (
    <div className={styles.Avatar}>
      <img src={avatarUrl} alt={alt} />
    </div>
  );
};

export default Avatar;
