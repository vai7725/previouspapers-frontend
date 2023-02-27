import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
import { GlobalContext } from "../../context/Context";
import PaperCard from "./PaperCard";
import Loading from "../Loading";
import Alert from "../Alert";

const Papers = () => {
  const { state, dispatch } = GlobalContext();
  const { university } = useParams();

  const {
    papersData,
    backendURL,
    courseNameArr,
    courseYearArr,
    paperTitleArr,
    paperYearArr,
    showFilterSidebar,
  } = state;

  // console.log(papersData);

  const fetchPapers = async () => {
    dispatch({ type: "HANDLE_LOADING", payload: true });
    const res = await axios.get(`${backendURL}/api/papers/${university}`);
    const { paperData } = await res.data;
    // making set of courseName
    const courseNameSet = Array.from(
      new Set(
        await paperData.map((item) => {
          return item.courseName;
        })
      )
    );

    // making set of courseYear
    const courseYearSet = Array.from(
      new Set(
        await paperData.map((item) => {
          return item.courseYear;
        })
      )
    );

    // making set of paperTitle
    const paperTitleSet = Array.from(
      new Set(
        await paperData.map((item) => {
          return item.paperTitle;
        })
      )
    );

    // making set of paperTitle
    const paperYearSet = Array.from(
      new Set(
        await paperData.map((item) => {
          return item.paperYear;
        })
      )
    );

    const filterItemObj = {
      courseNameArr: courseNameSet,
      courseYearArr: courseYearSet,
      paperTitleArr: paperTitleSet,
      paperYearArr: paperYearSet,
    };

    if (paperData) {
      dispatch({ type: "UPDATE_PAPERS_DATA", payload: paperData });
      dispatch({ type: "SET_FILTER_ITEMS", payload: filterItemObj });
    } else {
      dispatch({ type: "UPDATE_PAPERS_DATA", payload: [] });
    }
  };

  // adding courseName to the sidebar respective field dynamically
  const courseNameFilterList = courseNameArr.map((item) => {
    return (
      <label
        key={crypto.randomUUID()}
        htmlFor={`'${item}'`}
        className="content"
      >
        {item}
        <input
          type="checkbox"
          name={item}
          id={`'${item}'`}
          className="filter-checkbox"
        />
      </label>
    );
  });

  // adding courseYear to the sidebar respective field dynamically
  const courseYearFilterList = courseYearArr.map((item) => {
    return (
      <label
        key={crypto.randomUUID()}
        htmlFor={`'${item}'`}
        className="content"
      >
        {item}
        <input
          type="checkbox"
          name={item}
          id={`'${item}'`}
          className="filter-checkbox"
        />
      </label>
    );
  });

  // adding subjects to the sidebar respective field dynamically
  const subjectsFilterList = paperTitleArr.map((item) => {
    return (
      <label
        key={crypto.randomUUID()}
        htmlFor={`'${item}'`}
        className="content"
      >
        {item}
        <input
          type="checkbox"
          name={item}
          id={`'${item}'`}
          className="filter-checkbox"
        />
      </label>
    );
  });

  // adding paperYear to the sidebar respective field dynamically
  const paperYearFilterList = paperYearArr.map((item) => {
    return (
      <label
        key={crypto.randomUUID()}
        htmlFor={`'${item}'`}
        className="content"
      >
        {item}
        <input
          type="checkbox"
          name={item}
          id={`'${item}'`}
          className="filter-checkbox"
        />
      </label>
    );
  });

  useEffect(() => {
    fetchPapers();
  }, []);

  return (
    <section className="papers-section">
      <button
        className="btn toggleSidebar-btn"
        onClick={() =>
          dispatch({ type: "HIDE_FILTER_SIDEBAR", payload: !showFilterSidebar })
        }
      >
        {window.innerWidth > "576" ? <FaBars /> : " Filter papers"}
      </button>
      <aside
        className={`${
          showFilterSidebar
            ? "filter-sidebar filter-sidebar-show"
            : "filter-sidebar"
        }`}
      >
        <header>
          <h1>Filter papers</h1>
          <button
            className="btn sidebar-btn"
            onClick={() =>
              dispatch({
                type: "HIDE_FILTER_SIDEBAR",
                payload: !showFilterSidebar,
              })
            }
          >
            <FaTimes />
          </button>
        </header>
        <main className="filter-content">
          <section className="courseName-section filter-sidebar-section">
            <h3>Courses:</h3>
            {courseNameFilterList}
          </section>
          <section className="courseYear-section filter-sidebar-section">
            <h3>Course Year:</h3>
            {courseYearFilterList}
          </section>
          <section className="subject-section filter-sidebar-section">
            <h3>Subjects:</h3>
            {subjectsFilterList}
          </section>
          <section className="paperYear-section filter-sidebar-section">
            <h3>Paper Years:</h3>
            {paperYearFilterList}
          </section>
        </main>
        <footer className="sidebar-action-btns">
          <button className="btn sidebar-action-btn clearFilter-btn">
            Clear filters
          </button>
          <button className="btn sidebar-action-btn applyFilter-btn">
            Apply filters
          </button>
        </footer>
      </aside>
      <div className="papers-box">
        {/* {papersFiltered.length < 1 ? papers : filteredPapers} */}
      </div>
    </section>
  );
};

export default Papers;
