import React from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { GlobalContext } from '../../context/Context';
import { handleInpBlur } from '../../helper/tinyFns';
import { useNavigate } from 'react-router-dom';
import {
  emailBodyProvider,
  generateOTP,
  sendMail,
} from '../../helper/helperFns';

const Recover = () => {
  const navigate = useNavigate();
  const { state, dispatch } = GlobalContext();
  const { loginFormInpValues, clientDomain } = state;
  const { email } = loginFormInpValues;

  const loginFormInpHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: 'HANDLE_LOGIN_FORM_INPUTS',
      payload: {
        [e.target.name]: e.target.value.trim(),
      },
    });
  };

  const recoverFormHandler = (e) => {
    e.preventDefault();
    generateOTP(email).then((res) => {
      const emailBody = emailBodyProvider('resetOTP', {
        clientDomain,
        code: res.code,
      });

      const mailPromise = sendMail(email, emailBody);
      toast.promise(mailPromise, {
        loading: 'Generating OTP',
        success: <b>OTP has been sent successfully</b>,
        error: <b>Oops! Some error occured.</b>,
      });

      mailPromise.then(() => {
        dispatch({
          type: 'SET_FORM_SESSION',
          payload: {
            verificationSession: true,
          },
        });
        navigate('/verifytorecover');
      });
    });
  };

  return (
    <section className="form-section">
      <Toaster position="top-center" reverseOrder="false"></Toaster>
      <form className="form" onSubmit={recoverFormHandler}>
        <header className="form_heading">
          <h2>Recover your password</h2>
          <p>Please avoid page refresh for seamless experience.</p>
        </header>
        <main className="form-main">
          {/* Email input */}
          <label htmlFor="Login_email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="Login_email"
            className="form-inp"
            name="email"
            required
            value={loginFormInpValues.email}
            onChange={(e) => loginFormInpHandler(e)}
            onBlur={(e) => handleInpBlur(e)}
          />

          <button className="btn form-btn login-form-btn">Recover</button>
          <span className="form-notation">
            An OTP will be sent to your email.
          </span>
        </main>
      </form>
    </section>
  );
};

export default Recover;
