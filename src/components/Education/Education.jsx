import React from 'react';

const Education = ({ educations }) => {
  const myEducation = (
    <div>
      {educations.map(education => {
        return (
          <div className="item" key={education.degree}>
            <h3>{edu.university}</h3>
            <span>
              {edu.startDate} - {edu.endDate}
            </span>
            <p>{edu.degree}</p>
            <p>{edu.description}</p>
          </div>
        );
      })}
    </div>
  );
  return (
    <div>
      <i className="fas fa-graduation-cap" />
      <h2>EDUCATION</h2>
      {myEducation}
    </div>
  );
};
