import React from "react";

const PaperCard = ({
  courseName,
  courseYear,
  paperTitle,
  paperURL,
  paperYear,
}) => {
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
        <h3 className="subject-title">{paperTitle}</h3>
        <p>{courseYear}</p>
        <h4>{courseName}</h4>
        <p className="paper-year">{paperYear}</p>

        <a href={paperURL} className="btn paper-card-btn">
          Download
        </a>
      </div>
    </div>
  );
};

export default PaperCard;
