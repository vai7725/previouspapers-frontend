import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-box">
        <h1>About Us</h1>
        <p>
          The "previouspapers.netlify.app" is built to help students who are
          pursuing different courses in different universities of Rajasthan and
          can't understand the pattern of the question paper. From here students
          can download previous year questions papers related to their courses
          and universities for free and prepare for their further college exams.
        </p>
      </div>
      <div className="about-box">
        <h1>About Creators</h1>
        <div className="about-creator-box">
          <div className="about-creator-card">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQHJHUCSRF6VAA/profile-displayphoto-shrink_800_800/0/1677689728343?e=1684368000&v=beta&t=8ckA1vyeDzfKNvdIXncUNtXjjS0bFWSy3ozOp0mtPfo"
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
              src="https://media.licdn.com/dms/image/D4D03AQH81lxz84B4ZQ/profile-displayphoto-shrink_800_800/0/1675145695216?e=1684368000&v=beta&t=QFkqSvBC7Yht8YnrZiJoJ62i-I8wggqSXomZywd1xbU"
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
