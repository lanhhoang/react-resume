import React from 'react';
import styles from './Experience.css';

import Card from '../Card/Card';

const Experience = ({ experiences }) => {
  const myExperience = (
    <div>
      {experiences.map(experience => {
        return (
          <Card
            key={experience.company}
            header={experience.company}
            metadata={`${experience.startTime} - ${experience.endTime}`}
            title={experience.jobTitle}
            description={experience.description}
          />
        );
      })}
    </div>
  );
  return (
    <div className={styles.Experience}>
      <i className="fas fa-briefcase" />
      <h2>EXPERIENCE</h2>
      {myExperience}
    </div>
  );
};

export default Experience;
