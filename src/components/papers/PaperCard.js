import React from "react";

const PaperCard = ({
  courseName,
  courseYear,
  paperTitle,
  paperURL,
  paperYear,
}) => {
  const paperID = paperURL.split("/")[5];
  console.log(paperID);
  return (
    <div className="paper-card" title={paperTitle}>
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
          {paperTitle.length > 40
            ? paperTitle.split("").slice(0, 40).join("").trim() + "..."
            : paperTitle}
        </h3>
        <p>{courseYear}</p>
        <h4>{courseName}</h4>
        <p className="paper-year">{paperYear}</p>

        <a
          href={`https://drive.google.com/u/0/uc?id=${paperID}&export=download`}
          className="btn paper-card-btn"
        >
          Download
        </a>
      </div>
    </div>
  );
};

export default PaperCard;
