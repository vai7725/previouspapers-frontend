import React, { useEffect } from 'react';
import { GlobalContext } from '../../context/Context';
import Main from './Main';
import University from './University/University';
import Welcome from './Welcome';
import { Toaster } from 'react-hot-toast';

const Home = () => {
  const { state, dispatch } = GlobalContext();
  const { userHitForFirstTime } = state;

  useEffect(() => {
    document.title =
      'Previous Year Question Papers | mdsuonline.com | previouspapers.com | mdsuexam.org | mdsuajmer.ac.in ';
  }, []);
  return (
    <>
      {userHitForFirstTime && <Welcome />}
      <Toaster position="top-center" reverseOrder="none"></Toaster>
      <Main />
      <University />
    </>
  );
};

export default Home;
