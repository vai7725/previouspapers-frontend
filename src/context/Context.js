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
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  const fetchUniversity = async () => {
    dispatch({ type: 'HANDLE_LOADING', payload: true });
    const res = await axios.get(`${state.backendURL}/fetchuniversities`);
    const data = await res.data;
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
