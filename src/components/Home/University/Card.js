import React from "react";
import { Link } from "react-router-dom";

const Card = ({ unName, unDesc, unPath, unImgLink }) => {
  return (
    <div className="university-card">
      <img src={unImgLink} alt="university img" className="university-img" />
      <h3 className="university-title">{unName}</h3>
      <p className="university-desc">
        {unDesc.length > 140
          ? unDesc.split("").slice(0, 140).join("").trim() + "..."
          : unDesc}
      </p>
      <Link to={`/api/papers${unPath}`} className="btn university-card-btn">
        Select
      </Link>
    </div>
  );
};

export default Card;
