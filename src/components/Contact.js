import React, { useEffect } from 'react';
import { GlobalContext } from '../context/Context';
import { contact } from '../helper/helperFns';
import { Toaster, toast } from 'react-hot-toast';
import { checkFormForEmpty, clearFormInps } from '../helper/tinyFns';

const Contact = () => {
  const { state, dispatch } = GlobalContext();
  const { contactFormInpValues, userCredentials } = state;

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    const formIsValid = checkFormForEmpty(contactFormInpValues);
    if (formIsValid) {
      const contactPromise = contact(contactFormInpValues);
      toast.promise(contactPromise, {
        loading: 'Processing your request...',
        success: <b>Contact Request Sent. Thanks</b>,
        error: <b>Oops! Something went wrong.</b>,
      });
      contactPromise.then((res) => {
        dispatch({
          type: 'HANDLE_CONTACT_FORM_VALUES',
          payload: clearFormInps(contactFormInpValues),
        });
      });
    } else {
      toast.error('Invalid input. Please try again.');
    }
  };

  const handleFormInps = (e) => {
    dispatch({
      type: 'HANDLE_CONTACT_FORM_VALUES',
      payload: {
        name: `${state.userCredentials.firstName} ${state.userCredentials.lastName}`,
        email: state.userCredentials.email,
        [e.target.name]: e.target.value,
      },
    });
  };

  useEffect(() => {
    document.title = 'Contact | Previous Papers';
  }, []);

  return (
    <section className="form-section" id="contact-section">
      <Toaster position="top-center" reverseOrder="false"></Toaster>
      <form className="form" onSubmit={handleContactFormSubmit}>
        <header className="form_heading">
          <h2>Contact us</h2>
        </header>
        <main className="form-main">
          <label className="form-label" htmlFor="name">
            Name:
          </label>
          <input
            className="form-inp form-inp-disabled"
            type="text"
            placeholder="Enter your name"
            name="name"
            value={`${userCredentials.firstName} ${userCredentials.lastName}`}
            id="name"
            readOnly
          />

          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="form-inp form-inp-disabled"
            type="email"
            id="email"
            placeholder="Enter your email"
            name="email"
            value={userCredentials.email}
            readOnly
          />
          <label className="form-label" htmlFor="university">
            University:
          </label>
          <input
            className="form-inp"
            type="text"
            id="university"
            placeholder="Enter university name"
            name="university"
            value={contactFormInpValues.university}
            onChange={(e) => handleFormInps(e)}
          />

          <label className="form-label" htmlFor="msg">
            Message:
          </label>
          <textarea
            className="form-inp msg-inp"
            id="msg"
            cols="30"
            rows="10"
            placeholder="Write your message"
            name="msg"
            value={contactFormInpValues.msg}
            onChange={(e) => handleFormInps(e)}
          ></textarea>

          <button className="btn form-btn">Submit</button>
          <span className="form-notation">
            We'll connect you shortly via email.
          </span>
        </main>
      </form>
    </section>
  );
};

export default Contact;
