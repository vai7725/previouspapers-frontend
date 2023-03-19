import React from 'react';
import landingImg from '../../assets/landing img.webp';

const Main = () => {
  return (
    <main className="landing-page">
      <div className="landing-page-content">
        <img src={landingImg} alt="" className="landing-img" />
        <div className="notations">
          <h1>
            Download and <br /> prepare for your exams
          </h1>
          <a href="#University-section" className="btn landing-page-btn">
            Go to papers
          </a>
        </div>
      </div>
    </main>
  );
};

export default Main;
