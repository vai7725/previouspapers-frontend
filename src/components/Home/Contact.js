import React, { useEffect } from "react";
import {
  FaEnvelope,
  FaFacebookMessenger,
  FaGraduationCap,
  FaUser,
} from "react-icons/fa";
import { GlobalContext } from "../../context/Context";

const Contact = () => {
  const { state, dispatch } = GlobalContext();
  const {
    inputName,
    inputEmail,
    inputUniversity,
    inputMessage,
    submissionMsg,
    showSubmissionMsg,
  } = state;

  const storeContactInfo = (e) => {
    e.preventDefault();
    dispatch({ type: "STORE_CONTACT_INFO" });
  };

  const clearSubmissionMsg = () => {
    dispatch({ type: "CLEAR_SUBMISSION_MESSAGE" });
  };

  useEffect(() => {
    setTimeout(() => {
      clearSubmissionMsg();
    }, 3000);
  });

  return (
    <section className="contact-section" id="contact-section">
      <form className="contact-form">
        <header className="heading">
          <h2>Want to connect?</h2>
          <p>
            Got any problem related to papers or website? Get in touch with us
            and we'll get connected shortly via email.
          </p>
        </header>
        <main>
          <div className="input-box">
            <FaUser />
            <input
              type="text"
              placeholder="Enter your name"
              value={inputName}
              onChange={(e) =>
                dispatch({ type: "HANDLE_FORM_NAME", payload: e.target.value })
              }
            />
          </div>

          <div className="input-box">
            <FaEnvelope />
            <input
              type="email"
              placeholder="Enter your email"
              value={inputEmail}
              onChange={(e) =>
                dispatch({ type: "HANDLE_FORM_EMAIL", payload: e.target.value })
              }
            />
          </div>
          <div className="input-box">
            <FaGraduationCap />
            <input
              type="text"
              placeholder="Enter university name"
              value={inputUniversity}
              onChange={(e) =>
                dispatch({
                  type: "HANDLE_FORM_UNIVERSITY",
                  payload: e.target.value,
                })
              }
            />
          </div>
          <div className="input-box textarea-box">
            <FaFacebookMessenger />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Write your message"
              value={inputMessage}
              onChange={(e) =>
                dispatch({
                  type: "HANDLE_FORM_MESSAGE",
                  payload: e.target.value,
                })
              }
            ></textarea>
          </div>
          <button className="btn form-btn" onClick={storeContactInfo}>
            Sumbit
          </button>
          {showSubmissionMsg && <p>{submissionMsg}</p>}
        </main>
      </form>
    </section>
  );
};

export default Contact;
