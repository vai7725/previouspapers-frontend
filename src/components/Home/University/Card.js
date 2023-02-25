import React from "react";
import { Link } from "react-router-dom";
import universityImg from "../../../assets/mdsu.jpg";

const Card = () => {
  return (
    <div className="university-card">
      <img
        src={universityImg}
        alt="university img"
        className="university-img"
      />
      <h3 className="university-title">
        Maharshi Dayananda Saraswati University
      </h3>
      <p className="university-desc">
        Maharshi Dayanand Saraswati University Ajmer is a prominent affiliating
        university in the state of Rajasthan. Established on August 1, 1987...
      </p>
      <Link className="btn university-card-btn">Select</Link>
    </div>
  );
};

export default Card;
