import React from 'react';

const Certificates = () => {
  return (
    <section className="certificates fade-in">
      <h2>Certificates</h2>
      <p>Here are the certifications I have earned:</p>
      <div className="certificate-list">
        <div className="certificate">
          <h3>MERN Stack Certification</h3>
          <p>
            Completed at <strong>BMJ Digital Education</strong>.
            This course covered all aspects of MERN Stack development, including MongoDB, ExpressJS, ReactJS, and NodeJS.
          </p>
        </div>
        <div className="certificate">
          <h3>ReactJS Certification</h3>
          <p>
            Completed at <strong>Great Learning</strong> (Online course).
            This certification focused on ReactJS fundamentals, state management, and building scalable web applications.
          </p>
        </div>
        <div className="certificate">
          <h3>Excel Certification</h3>
          <p>
            Completed at <strong>Great Learning</strong> (Online course).
            This certification enhanced my skills in data analysis, functions, and formulas in Microsoft Excel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
