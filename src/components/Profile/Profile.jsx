import React from 'react';

const Profile = ({ name, profession }) => {
  return (
    <div>
      <div>Avatar</div>
      <div className={styles.title}>
        <h1>{name}</h1>
        <h2>{profession}</h2>
      </div>
      <div>Social</div>
    </div>
  );
};

export default Profile;
