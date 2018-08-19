import React from 'react';
import styles from './Social.css';

const Social = ({ socials }) => {
  const socialNetworks = (
    <ul>
      {socials.map(social => {
        return (
          <li key={social.name}>
            <a href={social.url} target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-${social.name}`} />
            </a>
          </li>
        );
      })}
    </ul>
  );
  return <div className={styles.Social}>{socialNetworks}</div>;
};

export default Social;
