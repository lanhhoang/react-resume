import React from 'react';
import styles from './Profile.css';

const Profile = ({ name, profession }) => {
  return (
    <div className={styles.Profile}>
      <div>Avatar</div>
      <div className={styles.Title}>
        <h1>{name}</h1>
        <h2>{profession}</h2>
      </div>
      <div>Social</div>
    </div>
  );
};

export default Profile;
