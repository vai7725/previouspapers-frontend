import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  useEffect(() => {
    document.title = 'Log In | Previous Papers';
  }, []);
  return (
    <section className="form-section">
      <form className="form">
        <header className="form_heading">
          <h2>Log in to your account</h2>
        </header>
        <main className="form-main">
          {/* Email input */}
          <label htmlFor="login_form_email_inp" className="form-label">
            Email
          </label>
          <input type="email" id="login_form_email_inp" className="form-inp" />
          {/* Password input */}
          <label htmlFor="" className="form-label">
            <span>Password</span>
            <button className="btn form_forgot_password_btn">
              Forgot password?
            </button>
          </label>
          <input type="password" className="form-inp" />

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
