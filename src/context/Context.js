import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import { reducer } from './Reducer';
import { getUser, setUserLoggedIn } from '../helper/helperFns';

const serverURI = process.env.REACT_APP_SERVER_URI;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const defaultState = {
    clientDomain: `previouspapers.netlify.app`,
    isUserLoggedIn: false,
    userCredentials: {},
    profileModalOpen: false,
    userHitForFirstTime: false,
    throwError: false,
    errorMsg: '',
    loading: true,
    smNavLinksOpen: false,
    backendURL: serverURI,
    universityData: [],
    contactFormInpValues: {
      name: '',
      email: '',
      university: '',
      msg: '',
    },
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
    loaderProgress: 0,
    signUpFormInpValues: {
      firstName: '',
      lastName: '',
      profession: '',
      email: '',
      password: '',
      confirm_password: '',
    },
    verifyFormInpValue: '',
    loginFormInpValues: {
      email: '',
      password: '',
    },
    formSessions: {
      passResetSession: false,
      verificationSession: false,
    },
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  const fetchUniversity = async () => {
    dispatch({ type: 'HANDLE_LOADING', payload: true });
    dispatch({ type: 'SET_PROGRESS_BAR', payload: 30 });
    const res = await axios.get(`${state.backendURL}/api/fetchuniversities`);
    dispatch({ type: 'SET_PROGRESS_BAR', payload: 50 });

    const data = await res.data;
    dispatch({ type: 'SET_PROGRESS_BAR', payload: 70 });

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
    const authToken = localStorage.getItem('token');
    if (authToken) {
      const getUserPromise = getUser(JSON.parse(authToken));
      getUserPromise.then((res) => {
        if (res.status === 200) {
          setUserLoggedIn(authToken, dispatch);
          dispatch({ type: 'SET_USER_CREDENTIALS', payload: res.data.rest });
        }
      });
    }
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
