import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/Context';
import { Toaster, toast } from 'react-hot-toast';
import {
  storeCreds,
  generateOTP,
  sendMail,
  emailBodyProvider,
} from '../../helper/helperFns';
import { useNavigate } from 'react-router-dom';
import { checkFormForEmpty, signUpFormInpHandler } from '../../helper/tinyFns';

const Signup = () => {
  const navigate = useNavigate();
  const { state, dispatch } = GlobalContext();
  const { signUpFormInpValues, clientDomain } = state;

  const isFormValid = checkFormForEmpty(signUpFormInpValues);
  const validPass = /^.{8,}$/;

  const signUpFormSubmitHandler = (e) => {
    e.preventDefault();

    try {
      const {
        firstName,
        lastName,
        profession,
        email,
        password,
        confirm_password,
      } = signUpFormInpValues;

      if (isFormValid) {
        if (validPass.test(password)) {
          if (password === confirm_password) {
            const credStorePromise = storeCreds({
              firstName,
              lastName,
              email,
              password,
              profession,
            });

            credStorePromise
              .then(() => {
                generateOTP(email).then((res) => {
                  const emailBody = emailBodyProvider('signUp', {
                    firstName,
                    clientDomain,
                    code: res.code,
                  });
                  const mailPromise = sendMail(email, emailBody);
                  toast.promise(mailPromise, {
                    loading: 'Sending the OTP',
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
                    navigate('/verify');
                  });
                });
              })
              .catch(() => toast.error('User already exist with this email'));
          } else {
            toast.error('Confirm the password.');
          }
        } else {
          toast.error('Password must be 8 or more characters long.');
        }
      } else {
        toast.error('Invalid input! Please try again.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = 'Sign Up | Previous Papers';
  }, []);
  return (
    <section className="form-section">
      <Toaster position="top-center" reverseOrder="false"></Toaster>
      <form className="form" onSubmit={signUpFormSubmitHandler}>
        <header className="form_heading">
          <h2>Create an account</h2>
        </header>
        <main className="form-main">
          {/* Firstname input */}
          <label htmlFor="" className="form-label">
            Firstname
          </label>
          <input
            id="Firstname"
            type="text"
            name="firstName"
            className="form-inp"
            required
            value={signUpFormInpValues.firstName}
            onChange={(e) => signUpFormInpHandler(e, dispatch)}
          />
          {/* Lastname input */}
          <label htmlFor="" className="form-label">
            Lastname
          </label>
          <input
            id="Lastname"
            type="text"
            name="lastName"
            className="form-inp"
            required
            value={signUpFormInpValues.lastName}
            onChange={(e) => signUpFormInpHandler(e, dispatch)}
          />
          {/* Profession input */}
          <label htmlFor="" className="form-label">
            Profession
          </label>
          <input
            id="Profession"
            type="text"
            name="profession"
            className="form-inp"
            required
            placeholder="Student / Teacher"
            value={signUpFormInpValues.profession}
            onChange={(e) => signUpFormInpHandler(e, dispatch)}
          />
          {/* Email input */}
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input
            id="Email"
            type="email"
            name="email"
            className="form-inp"
            required
            value={signUpFormInpValues.email}
            onChange={(e) => signUpFormInpHandler(e, dispatch)}
          />
          {/* Password input */}
          <label htmlFor="" className="form-label">
            Password
          </label>
          <input
            id="Password"
            type="password"
            name="password"
            className="form-inp"
            required
            value={signUpFormInpValues.password}
            onChange={(e) => signUpFormInpHandler(e, dispatch)}
          />
          {/* Confirm password input */}
          <label htmlFor="" className="form-label">
            Confirm password
          </label>
          <input
            id="Confirm_password"
            type="password"
            name="confirm_password"
            className="form-inp"
            required
            value={signUpFormInpValues.confirm_password}
            onChange={(e) => signUpFormInpHandler(e, dispatch)}
          />

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
