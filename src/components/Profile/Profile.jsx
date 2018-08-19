import React from 'react';
import styles from './Profile.css';

import Social from '../Social/Social';

const Profile = ({ name, profession, socials }) => {
  return (
    <div className={styles.Profile}>
      <div>Avatar</div>
      <div className={styles.Title}>
        <h1>{name}</h1>
        <h2>{profession}</h2>
      </div>
      <Social socials={socials} />
    </div>
  );
};

export default Profile;
