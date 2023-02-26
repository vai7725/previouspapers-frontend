import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import { reducer } from "./Reducer";
// require("dotenv");

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const defaultState = {
    backendURL: "http://localhost:5000",
    loading: true,
    universityData: [],
    smNavLinksOpen: false,
    inputName: "",
    inputEmail: "",
    inputUniversity: "",
    inputMessage: "",
    showSubmissionMsg: false,
    submissionMsg: "",
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  const fetchUniversity = async () => {
    dispatch({ type: "HANDLE_LOADING", payload: true });
    const res = await axios.get(`${state.backendURL}/fetchuniversities`);
    const data = await res.data;
    // console.log(data.universityData);
    const { universityData } = data;
    if (universityData) {
      dispatch({
        type: "UPDATE_UNIVERSITY_DATA",
        payload: universityData,
      });
    } else {
      dispatch({
        type: "UPDATE_UNIVERSITY_DATA",
        payload: [],
      });
    }
  };

  useEffect(() => {
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
