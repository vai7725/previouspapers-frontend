import React from "react";
import { GlobalContext } from "../../../context/Context";
import Card from "./Card";
import Loading from "../../Loading";

const University = () => {
  const { state } = GlobalContext();
  const { universityData, loading } = state;

  if (loading) {
    return <Loading />;
  }

  const universityCards = universityData.map((card) => {
    const { _id } = card;
    return <Card key={_id} {...card} />;
  });

  return (
    <section id="University-section" className="university-section">
      <div className="university-content-section">
        <h1>Select University</h1>
        {/* <hr /> */}
        <div className="university-card-box">{universityCards}</div>
      </div>
    </section>
  );
};

export default University;
