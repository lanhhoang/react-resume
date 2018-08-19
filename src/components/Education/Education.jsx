import React from 'react';
import styles from './Education.css';

const Education = ({ educations }) => {
  const myEducation = (
    <div>
      {educations.map(education => {
        return (
          <div className={styles.Item} key={education.degree}>
            <h3>{education.university}</h3>
            <span>
              {education.startTime} - {education.endTime}
            </span>
            <p>
              {education.degree} {education.fieldOfStudy}
            </p>
            <p>{education.description}</p>
          </div>
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
