import React, { useEffect } from "react";
import { GlobalContext } from "../context/Context";

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
          <h1>Contact us</h1>
          {/* <p>
            Got any problem related to papers or website? Get in touch with us
            and we'll get connected shortly via email.
          </p> */}
        </header>
        <main className="contact-form-main">
          <label className="form-label" htmlFor="name">
            Name:
          </label>
          <input
            className="inp"
            type="text"
            placeholder="Enter your name"
            value={inputName}
            id="name"
            onChange={(e) =>
              dispatch({ type: "HANDLE_FORM_NAME", payload: e.target.value })
            }
          />

          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="inp"
            type="email"
            id="email"
            placeholder="Enter your email"
            value={inputEmail}
            onChange={(e) =>
              dispatch({ type: "HANDLE_FORM_EMAIL", payload: e.target.value })
            }
          />
          <label className="form-label" htmlFor="university">
            University:
          </label>
          <input
            className="inp"
            type="text"
            id="university"
            placeholder="Enter university name"
            value={inputUniversity}
            onChange={(e) =>
              dispatch({
                type: "HANDLE_FORM_UNIVERSITY",
                payload: e.target.value,
              })
            }
          />

          <label className="form-label" htmlFor="msg">
            Message:
          </label>
          <textarea
            className="inp msg-inp"
            id="msg"
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
