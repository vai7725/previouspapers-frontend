import React from "react";

const PaperCard = () => {
  return (
    <div className="paper-card">
      <div className="paper-card-img">
        <div className="paper-card-img-bar"></div>
        <div className="paper-card-img-bar"></div>
        <div className="paper-card-img-bar"></div>
        <div className="paper-card-img-bar"></div>
        <div className="paper-card-img-bar"></div>
        <div className="paper-card-img-bar"></div>
        <div className="paper-card-img-bar"></div>
        <div className="paper-card-img-bar"></div>
        <div className="paper-card-img-bar"></div>
        <div className="paper-card-img-bar"></div>
        <div className="paper-card-img-bar"></div>
      </div>
      <div className="paper-details">
        <h3 className="subject-title">
          Botany: Diversity of Microbes and Low...
        </h3>

        <h4>B.Sc B.Ed</h4>
        <p className="paper-year">2022</p>

        <a href="#" className="btn paper-card-btn">
          Download
        </a>
      </div>
    </div>
  );
};

export default PaperCard;
