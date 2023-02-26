import React from "react";
import PaperCard from "./PaperCard";

const Papers = () => {
  return (
    <section className="papers-section">
      <header className="filter-section">
        <select name="" id="" className="filter">
          <option value="" className="filter-option">
            --Select Course--
          </option>
          <option value="" className="filter-option">
            B.Sc B.Ed
          </option>
        </select>
        <select name="" id="" className="filter">
          <option value="" className="filter-option">
            --Select Course Year--
          </option>
          <option value="" className="filter-option">
            B.Sc B.Ed
          </option>
        </select>
        <select name="" id="" className="filter">
          <option value="" className="filter-option">
            --Select Subject--
          </option>
          <option value="" className="filter-option">
            B.Sc B.Ed
          </option>
        </select>
        <select name="" id="" className="filter">
          <option value="" className="filter-option">
            --Select Paper Year--
          </option>
          <option value="" className="filter-option">
            B.Sc B.Ed
          </option>
        </select>
      </header>
      <div className="papers-box">
        <PaperCard />
      </div>
    </section>
  );
};

export default Papers;
