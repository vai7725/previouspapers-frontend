import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-section">
      <h1>About page is not available at this moment. We're working on it.</h1>
      <Link to="/" className="btn error-page-btn">
        Back Home
      </Link>
    </div>
  );
};

export default About;
