import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FaTimes } from 'react-icons/fa';
import { BsFilterLeft, BsArrowUpCircleFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { GlobalContext } from '../../context/Context';
import PaperCard from './PaperCard';
import Loading from '../Loading';
import {
  CourseNameFilterOption,
  CourseYearFilterOption,
  SubjectFilterOption,
  PaperYearFilterOption,
} from './FilterOptions';
import Error from '../Error';

const Papers = () => {
  const { state, dispatch } = GlobalContext();
  const { university } = useParams();

  const {
    throwError,
    errorMsg,
    loading,
    papersData,
    backendURL,
    courseNameArr,
    courseYearArr,
    paperTitleArr,
    paperYearArr,
    showFilterSidebar,
    filteredPapersByCourseName,
    filteredPapersByCourseYear,
    filteredPapersByPaperTitle,
    filteredPapersByPaperYear,
  } = state;

  const fetchPapers = async () => {
    dispatch({ type: 'HANDLE_LOADING', payload: true });
    dispatch({ type: 'SET_PROGRESS_BAR', payload: 30 });

    const res = await axios.get(`${backendURL}/api/papers/${university}`);
    const { paperData, msg } = await res.data;
    dispatch({ type: 'SET_PROGRESS_BAR', payload: 50 });

    // making set of courseName

    if (paperData) {
      const courseNameSet = Array.from(
        new Set(await paperData.map((item) => item.courseName))
      ).map((item) => ({ id: crypto.randomUUID(), item, isChecked: false }));
      dispatch({ type: 'UPDATE_PAPERS_DATA', payload: paperData });
      dispatch({
        type: 'SET_INITIAL_COURSE_NAME_FILTER_ITEMS',
        payload: courseNameSet,
      });
    }
    dispatch({ type: 'SET_PROGRESS_BAR', payload: 70 });

    if (msg) {
      dispatch({ type: 'THROW_ERROR', payload: msg });
    }
    dispatch({ type: 'SET_PROGRESS_BAR', payload: 100 });
  };

  const filterOptionData = {
    courseNameArr,
    courseYearArr,
    paperTitleArr,
    paperYearArr,
  };

  const toggleCourseNameCheckbox = (e, i, item) => {
    const updatedCourseNameArr = [...courseNameArr];
    updatedCourseNameArr.forEach((element, index) => {
      i === index ? (element.isChecked = true) : (element.isChecked = false);
    });

    dispatch({
      type: 'TOGGLE_FILTER_OPTIONS',
      payload: {
        ...filterOptionData,
        courseNameArr: updatedCourseNameArr,
        paperTitleArr: [],
        paperYearArr: [],
      },
    });

    dispatch({
      type: 'ADD_COURSE_NAME_VALUE_FILTER_OPTION_OBJ',
      payload: item,
    });
  };

  const toggleCourseYearCheckbox = (e, i, item) => {
    const updatedCourseYearArr = [...courseYearArr];

    updatedCourseYearArr.forEach((element, index) => {
      i === index ? (element.isChecked = true) : (element.isChecked = false);
    });

    dispatch({
      type: 'TOGGLE_FILTER_OPTIONS',
      payload: {
        ...filterOptionData,
        courseYearArr: updatedCourseYearArr,
        paperYearArr: [],
      },
    });

    dispatch({
      type: 'ADD_COURSE_YEAR_VALUE_FILTER_OPTION_OBJ',
      payload: item,
    });
  };

  const toggleSubjectCheckbox = (e, i, item) => {
    const updatedPaperTitleArr = [...paperTitleArr];

    updatedPaperTitleArr.forEach((element, index) => {
      i === index ? (element.isChecked = true) : (element.isChecked = false);
    });

    dispatch({
      type: 'TOGGLE_FILTER_OPTIONS',
      payload: {
        ...filterOptionData,
        paperTitleArr: updatedPaperTitleArr,
      },
    });

    dispatch({
      type: 'ADD_PAPER_TITLE_VALUE_FILTER_OPTION_OBJ',
      payload: item,
    });
  };

  const togglePaperYearCheckbox = (e, i, item) => {
    const updatedPaperYearArr = [...paperYearArr];
    updatedPaperYearArr.forEach((element, index) => {
      i === index ? (element.isChecked = true) : (element.isChecked = false);
    });

    dispatch({
      type: 'TOGGLE_FILTER_OPTIONS',
      payload: {
        ...filterOptionData,
        paperYearArr: updatedPaperYearArr,
      },
    });

    dispatch({
      type: 'ADD_PAPER_YEAR_VALUE_FILTER_OPTION_OBJ',
      payload: item,
    });
  };

  // adding courseName to the sidebar respective field dynamically
  const courseNameFilterList = courseNameArr.map((itemObj, i) => {
    return (
      <CourseNameFilterOption
        key={itemObj.id}
        {...itemObj}
        i={i}
        toggleCheckbox={toggleCourseNameCheckbox}
      />
    );
  });

  // adding courseYear to the sidebar respective field dynamically

  const courseYearFilterList = courseYearArr.map((itemObj, i) => {
    return (
      <CourseYearFilterOption
        key={crypto.randomUUID()}
        {...itemObj}
        i={i}
        toggleCheckbox={toggleCourseYearCheckbox}
      />
    );
  });

  // adding subjects to the sidebar respective field dynamically
  const subjectsFilterList = paperTitleArr.map((itemObj, i) => {
    return (
      <SubjectFilterOption
        key={itemObj.id}
        {...itemObj}
        i={i}
        toggleCheckbox={toggleSubjectCheckbox}
      />
    );
  });

  // adding paperYear to the sidebar respective field dynamically
  const paperYearFilterList = paperYearArr.map((itemObj, i) => {
    return (
      <PaperYearFilterOption
        key={itemObj.id}
        {...itemObj}
        i={i}
        toggleCheckbox={togglePaperYearCheckbox}
      />
    );
  });

  const clearFilters = () => {
    const resetCourseNameArr = [...courseNameArr];
    resetCourseNameArr.forEach((element, index) => {
      element.isChecked = false;
    });
    dispatch({
      type: 'CLEAR_FILTERS',
      payload: {
        ...filterOptionData,
        resetCourseNameArr,
        courseYearArr: [],
        paperTitleArr: [],
        paperYearArr: [],
      },
    });
  };

  const papers = papersData.map((paper) => {
    return <PaperCard key={paper._id} {...paper} />;
  });

  const papersByCourseName = filteredPapersByCourseName.map((paper) => {
    return <PaperCard key={crypto.randomUUID()} {...paper} />;
  });

  const papersByCourseYear = filteredPapersByCourseYear.map((paper) => {
    return <PaperCard key={crypto.randomUUID()} {...paper} />;
  });

  const papersBySubject = filteredPapersByPaperTitle.map((paper) => {
    return <PaperCard key={crypto.randomUUID()} {...paper} />;
  });

  const papersByPaperYear = filteredPapersByPaperYear.map((paper) => {
    return <PaperCard key={crypto.randomUUID()} {...paper} />;
  });

  const [offSet, setOffSet] = useState(0);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    fetchPapers();
    scrollUp();
    document.title = `Previous year question papers | ${university} old papers | ${university} paper pattern | ${university} b sc bed old papers | ${university} ba bed old papers | ${university} previous year questions papers`;
    const onScroll = () => setOffSet(window.pageYOffset);

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (throwError) {
    return <Error msg={errorMsg} />;
  }

  return (
    <section
      className="papers-section"
      style={{
        position: `${
          showFilterSidebar && window.innerWidth < '576' ? 'fixed' : 'relative'
        }`,
      }}
    >
      <button
        className="btn toggleSidebar-btn"
        onClick={() =>
          dispatch({
            type: 'HIDE_FILTER_SIDEBAR',
            payload: !showFilterSidebar,
          })
        }
      >
        Filter
        <AiOutlineSearch className="searchIcon" />
      </button>
      <aside
        className={`${
          showFilterSidebar
            ? 'filter-sidebar filter-sidebar-show'
            : 'filter-sidebar'
        }`}
      >
        <header>
          <h1>Filter papers</h1>
          <button
            className="btn sidebar-btn"
            onClick={() =>
              dispatch({
                type: 'HIDE_FILTER_SIDEBAR',
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
          {courseYearArr.length > 0 && (
            <section className="courseYear-section filter-sidebar-section">
              <h3>Course Year:</h3>
              {courseYearFilterList}
            </section>
          )}
          {paperTitleArr.length > 0 && (
            <section className="subject-section filter-sidebar-section">
              <h3>Subjects:</h3>
              {subjectsFilterList}
            </section>
          )}
          {paperYearArr.length > 0 && (
            <section className="paperYear-section filter-sidebar-section">
              <h3>Paper Years:</h3>
              {paperYearFilterList}
            </section>
          )}
        </main>
        <footer className="sidebar-action-btns">
          <button
            className="btn sidebar-action-btn clearFilter-btn"
            onClick={clearFilters}
          >
            Clear filters
          </button>
        </footer>
      </aside>
      <div
        className={`${
          showFilterSidebar ? 'papers-box' : 'papers-box papers-box-full-width'
        }`}
      >
        <h1> {university.toUpperCase()} Question Papers</h1>
        <div className="papers">
          {filteredPapersByCourseName.length < 1
            ? papers
            : filteredPapersByCourseYear.length < 1
            ? papersByCourseName
            : filteredPapersByPaperTitle.length < 1
            ? papersByCourseYear
            : filteredPapersByPaperYear.length < 1
            ? papersBySubject
            : papersByPaperYear}
        </div>
      </div>
      {offSet > 1800 && (
        <button
          className="btn scrollUp-btn"
          title="Scroll top"
          onClick={scrollUp}
        >
          <BsArrowUpCircleFill />
        </button>
      )}
    </section>
  );
};

export default Papers;
