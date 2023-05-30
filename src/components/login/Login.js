import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/Context';
import { loginUser } from '../../helper/helperFns';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import {
  loginPromiseResolver,
  clearFormInps,
  checkFormForEmpty,
} from '../../helper/tinyFns';

const Login = () => {
  const navigate = useNavigate();
  const { state, dispatch } = GlobalContext();
  const { loginFormInpValues } = state;

  const loginFormInpHandler = (e) => {
    dispatch({
      type: 'HANDLE_LOGIN_FORM_INPUTS',
      payload: {
        [e.target.name]: e.target.value,
      },
    });
  };

  const loginFormSubmitHandler = (e) => {
    e.preventDefault();
    const formIsValid = checkFormForEmpty(loginFormInpValues);
    if (formIsValid) {
      const { email, password } = loginFormInpValues;
      if ((email && password) !== ' ') {
        const loginPromise = loginUser({ email, password });

        toast.promise(loginPromise, {
          loading: 'Verifying credentials...',
          success: <b>Verification successfull!</b>,
          error: <b>Please enter proper credentials...</b>,
        });

        loginPromise.then((res) => {
          loginPromiseResolver(res, navigate);
          dispatch({
            type: 'HANDLE_LOGIN_FORM_INPUTS',
            payload: clearFormInps(loginFormInpValues),
          });
        });
      }
    } else {
      toast.error('Invalid input! Try again.');
    }
  };

  useEffect(() => {
    document.title = 'Log In | Previous Papers';
  }, []);
  return (
    <section className="form-section" onSubmit={loginFormSubmitHandler}>
      <Toaster position="top-center" reverseOrder="false"></Toaster>
      <form className="form">
        <header className="form_heading">
          <h2>Log in to your account</h2>
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
          />
          {/* Password input */}
          <label htmlFor="" className="form-label">
            <span>Password</span>
            <Link
              to={'/recover'}
              onClick={() =>
                dispatch({
                  type: 'SET_FORM_SESSION',
                  payload: { passResetSession: true },
                })
              }
              className="btn form_forgot_password_btn"
            >
              Forgot password?
            </Link>
          </label>
          <input
            type="password"
            id="Login_password"
            name="password"
            className="form-inp"
            required
            value={loginFormInpValues.password}
            onChange={(e) => loginFormInpHandler(e)}
          />

          <button className="btn form-btn login-form-btn">Log In</button>
          <span className="form-notation">
            Do not have an account?{' '}
            <Link to={'/signup'} className="btn form_notation_btn">
              Sign Up
            </Link>
          </span>
        </main>
      </form>
    </section>
  );
};

export default Login;
