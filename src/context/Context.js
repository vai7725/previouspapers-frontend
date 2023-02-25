import React, { useContext, useReducer } from "react";
import { reducer } from "./Reducer";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const defaultState = {
    smNavLinksOpen: false,
    inputName: "",
    inputEmail: "",
    inputUniversiy: "",
    inputMessage: "",
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

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
