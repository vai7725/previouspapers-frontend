import React from "react";
import Card from "./Card";

const University = () => {
  return (
    <section id="University-section" className="university-section">
      <div className="university-content-section">
        <h1>Select University</h1>
        <div className="university-card-box">
          <Card />
        </div>
      </div>
    </section>
  );
};

export default University;
