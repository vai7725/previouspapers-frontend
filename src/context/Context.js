import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import { reducer } from './Reducer';
// require("dotenv");

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const defaultState = {
    userHitForFirstTime: false,
    throwError: false,
    errorMsg: '',
    loading: true,
    smNavLinksOpen: false,
    backendURL: 'https://ppw-backend.cyclic.app',
    universityData: [],
    inputName: '',
    inputEmail: '',
    inputUniversity: '',
    inputMessage: '',
    showSubmissionMsg: false,
    submissionMsg: '',
    showFilterSidebar: window.innerWidth > '576' ? true : false,
    papersData: [],
    courseNameArr: [],
    courseYearArr: [],
    paperTitleArr: [],
    paperYearArr: [],
    papersFiltered: [],
    markedFilterOptions: [],
    markedCourseNameFilterOptions: [],
    filteredPapersByCourseName: [],
    filteredPapersByCourseYear: [],
    filteredPapersByPaperTitle: [],
    filteredPapersByPaperYear: [],
    arePapersFiltered: false,
    showAlert: false,
    alertMsg: '',
    loaderProgress: 0,
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  const fetchUniversity = async () => {
    dispatch({ type: 'HANDLE_LOADING', payload: true });
    dispatch({ type: 'SET_PROGRESS_BAR', payload: 30 });
    const res = await axios.get(`${state.backendURL}/fetchuniversities`);
    dispatch({ type: 'SET_PROGRESS_BAR', payload: 50 });

    const data = await res.data;
    dispatch({ type: 'SET_PROGRESS_BAR', payload: 70 });

    // console.log(data.universityData);
    const { universityData } = data;
    if (universityData) {
      dispatch({
        type: 'UPDATE_UNIVERSITY_DATA',
        payload: universityData,
      });
    } else {
      dispatch({
        type: 'UPDATE_UNIVERSITY_DATA',
        payload: [],
      });
    }
    dispatch({ type: 'SET_PROGRESS_BAR', payload: 100 });
  };

  const identifyNewUser = () => {
    dispatch({
      type: 'WELCOME_SCREEN',
      payload: JSON.parse(localStorage.getItem('visitCredentials')),
    });
  };

  useEffect(() => {
    identifyNewUser();
    fetchUniversity();
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const GlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
