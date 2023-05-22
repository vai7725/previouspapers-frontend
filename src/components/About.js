import React from 'react';
import { useEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import axios from 'axios';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-box">
        <h1>About Us</h1>
        <p>
          Our website is a valuable resource for students looking to ace their
          exams. We provide a vast collection of previous year question papers
          across different educational boards and universities. By accessing
          these papers, students can get a clear understanding of the exam
          pattern, important topics, and expected questions. This enables them
          to prepare better and perform well in their exams. Our user-friendly
          interface makes it easy to navigate and find relevant papers. Try us
          out and see the difference in your performance!
        </p>
      </div>
      <div className="about-box">
        <h1>About Creators</h1>
        <div className="about-creator-box">
          <div className="about-creator-card">
            <img
              src="https://avatars.githubusercontent.com/u/107029078?v=4"
              alt="Creator img"
            />
            <h3>Vaibhav Prajapat</h3>
            <p>Designed and Developed</p>
            <a
              href="https://www.linkedin.com/in/vaibhav-prajapat-52b773232/"
              rel="noreferrer"
              target="_blank"
              className="btn about-card-btn"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="about-creator-card">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQH81lxz84B4ZQ/profile-displayphoto-shrink_400_400/0/1675145695216?e=1690416000&v=beta&t=OYWwgZ4VB4h-XUWWX_MKkGR8mCmWA1vhuCXu73aCSdc"
              alt="Creator img"
            />
            <h3>Abhishek Bansal</h3>
            <p>Designed</p>
            <a
              href="https://www.linkedin.com/in/abhishek-bansal-a6224a263/"
              rel="noreferrer"
              target="_blank"
              className="btn about-card-btn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="about-box">
          <h1>Credits</h1>
          <div>
            <ul className="credits-list">
              <li>
                <strong>Images: </strong>{' '}
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google
                </a>
                , &nbsp;
                <a
                  href="https://www.canva.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Canva
                </a>
              </li>
              <li>
                <strong>Font: </strong>{' '}
                <a
                  href="https://fonts.google.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google fonts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
