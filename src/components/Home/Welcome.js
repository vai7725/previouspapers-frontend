import React from 'react';
import { GlobalContext } from '../../context/Context';

const Welcome = () => {
  const { dispatch } = GlobalContext();
  const setUserVisited = () => {
    dispatch({ type: 'SET_USER_VISITED' });
  };

  return (
    <div className="welcome-screen">
      <div className="welcome-box">
        <h1>Welcome</h1>
        <p>
          Welcome to our website! We offer a comprehensive collection of
          previous year question papers to help students prepare for exams. With
          easy access to past papers, studying has never been easier!
        </p>
        <button className="btn welcomeBox-btn" onClick={setUserVisited}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Welcome;
