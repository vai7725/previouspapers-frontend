import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  useEffect(() => {
    document.title = 'Sign Up | Previous Papers';
  }, []);
  return (
    <section className="form-section">
      <form className="form">
        <header className="form_heading">
          <h2>Create an account</h2>
        </header>
        <main className="form-main">
          {/* Firstname input */}
          <label htmlFor="" className="form-label">
            Firstname
          </label>
          <input type="text" className="form-inp" />
          {/* Lastname input */}
          <label htmlFor="" className="form-label">
            Lastname
          </label>
          <input type="text" className="form-inp" />
          {/* Email input */}
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input type="email" className="form-inp" />
          {/* Password input */}
          <label htmlFor="" className="form-label">
            Password
          </label>
          <input type="password" className="form-inp" />
          {/* Confirm password input */}
          <label htmlFor="" className="form-label">
            Confirm password
          </label>
          <input type="password" className="form-inp" />

          <button className="btn form-btn login-form-btn">
            Create account
          </button>
          <span className="form-notation">
            Already have an account?{' '}
            <Link to={'/login'} className="btn form_notation_btn">
              Log In
            </Link>
          </span>
        </main>
      </form>
    </section>
  );
};

export default Signup;
