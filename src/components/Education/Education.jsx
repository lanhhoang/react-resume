import React from 'react';
import styles from './Education.css';

import Card from '../Card/Card';

const Education = ({ educations }) => {
  const myEducation = (
    <div>
      {educations.map(education => {
        return (
          <Card
            key={education.degree}
            header={education.university}
            metadata={`${education.startTime} - ${education.endTime}`}
            title={education.degree}
            subtitle={education.fieldOfStudy}
            description={education.description}
          />
        );
      })}
    </div>
  );
  return (
    <div className={styles.Education}>
      <i className="fas fa-graduation-cap" />
      <h2>EDUCATION</h2>
      {myEducation}
    </div>
  );
};

export default Education;
