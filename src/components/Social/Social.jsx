import React from 'react';

const Social = ({ socials }) => {
  const socialNetworks = (
    <ul>
      {socials.map(social => {
        <li key={social.name}>
          <a href={social.url} target="_blank" rel="noopener noreferrer">
            <i className={`fa fa-${social.name}-square`} />
          </a>
        </li>;
      })}
    </ul>
  );
  return <div className={style.Social}>{socialNetworks}</div>;
};

export default Social;
