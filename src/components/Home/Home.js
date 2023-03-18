import React, { useEffect } from 'react';
import { GlobalContext } from '../../context/Context';
import Main from './Main';
import University from './University/University';
import Welcome from './Welcome';

const Home = () => {
  const { state } = GlobalContext();
  const { userHitForFirstTime } = state;

  useEffect(() => {
    document.title = 'Previous Papers | Home';
  }, []);
  return (
    <>
      {userHitForFirstTime && <Welcome />}
      <Main />
      <University />
    </>
  );
};

export default Home;
