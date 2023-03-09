import React, { useEffect } from "react";
import Main from "./Main";
import University from "./University/University";

const Home = () => {
  useEffect(() => {
    document.title = "Previous Papers | Home";
  }, []);
  return (
    <>
      <Main />
      <University />
    </>
  );
};

export default Home;
