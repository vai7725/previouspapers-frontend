import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { GlobalContext } from "../../context/Context";
import PaperCard from "./PaperCard";
import Loading from "../Loading";
import Alert from "../Alert";

const Papers = () => {
  const { state, dispatch } = GlobalContext();
  const { university } = useParams();

  const {
    backendURL,
    papersData,
    loading,
    papersFiltered,
    arePapersFiltered,
    showAlert,
    alertMsg,
  } = state;

  const fetchPapers = async () => {
    dispatch({ type: "HANDLE_LOADING", payload: true });
    const res = await axios.get(`${backendURL}/api/papers/${university}`);
    const { paperData } = await res.data;
    if (paperData) {
      dispatch({ type: "UPDATE_PAPERS_DATA", payload: paperData });
    } else {
      dispatch({ type: "UPDATE_PAPERS_DATA", payload: [] });
    }
  };

  const papers = papersData.map((paper) => {
    return <PaperCard key={paper._id} {...paper} />;
  });

  const filteredPapers = papersFiltered.map((paper) => {
    return <PaperCard key={paper._id} {...paper} />;
  });

  // Dynamic courseName option generating code
  const courseNameListArr = papersData.map((paper, i) => {
    return paper.courseName;
  });

  const courseNameList = Array.from(
    new Set(["--Select Course--", ...courseNameListArr])
  );

  const courseNameOptions = courseNameList.map((item) => {
    return (
      <option key={crypto.randomUUID()} value={item} className="filter-option">
        {item}
      </option>
    );
  });

  // Dynamic courseYear option generating code
  const courseYearListArr = papersData.map((paper, i) => {
    return paper.courseYear;
  });

  const courseYearList = Array.from(
    new Set(["--Select Course Year--", ...courseYearListArr])
  );

  const courseYearOptions = courseYearList.map((item) => {
    return (
      <option key={crypto.randomUUID()} value={item} className="filter-option">
        {item}
      </option>
    );
  });

  // Dynamic subject option generating code
  const subjectListArr = papersData.map((paper, i) => {
    return paper.paperTitle;
  });

  const subjectList = Array.from(
    new Set(["--Select Subject--", ...subjectListArr])
  );

  const subjectOptions = subjectList.map((item) => {
    return (
      <option key={crypto.randomUUID()} value={item} className="filter-option">
        {item}
      </option>
    );
  });

  // Dynamic paperYear option generating code
  const paperYearListArr = papersData.map((paper, i) => {
    return paper.paperYear;
  });

  const paperYearList = Array.from(
    new Set(["--Select Paper Year--", ...paperYearListArr])
  );

  const paperYearOptions = paperYearList.map((item) => {
    return (
      <option key={crypto.randomUUID()} value={item} className="filter-option">
        {item}
      </option>
    );
  });

  const closeAlert = () => {
    setTimeout(() => {
      dispatch({ type: "CLOSE_ALERT" });
    }, 3000);
  };

  useEffect(() => {
    showAlert && alert(`${alertMsg}`);
  }, [showAlert]);

  useEffect(() => {
    fetchPapers();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="papers-section">
      <Alert closeAlert={closeAlert} />
      <header className="filter-section">
        <select
          name="courseName"
          id=""
          className="filter"
          onChange={(e) => {
            console.log("Changed");
            dispatch({
              type: "FILTER_PAPERS_BY_COURSE_NAME",
              payload: e.target.value[0] == "-" ? "" : e.target.value,
            });
          }}
        >
          {courseNameOptions}
        </select>
        <select
          name="courseYear"
          id=""
          className="filter"
          onChange={(e) => {
            dispatch({
              type: "FILTER_PAPERS_BY_COURSE_YEAR",
              payload: e.target.value[0] == "-" ? "" : e.target.value,
            });
          }}
        >
          {courseYearOptions}
        </select>
        <select
          name="subject"
          id=""
          className="filter"
          onChange={(e) =>
            dispatch({
              type: "FILTER_PAPERS_BY_SUBJECT",
              payload: e.target.value[0] == "-" ? "" : e.target.value,
            })
          }
        >
          {subjectOptions}
        </select>
        <select name="" id="" className="filter">
          {paperYearOptions}
        </select>
      </header>
      {arePapersFiltered && (
        <button
          className="btn clearFilter-btn"
          onClick={() => dispatch({ type: "CLEAR_PAPER_FILTERS" })}
        >
          Clear filters
        </button>
      )}
      <div className="papers-box">
        {papersFiltered.length < 1 ? papers : filteredPapers}
      </div>
    </section>
  );
};

export default Papers;
