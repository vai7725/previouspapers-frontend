import React, { useEffect } from "react";
import Contact from "./Contact";
import Footer from "./Footer";
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
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
