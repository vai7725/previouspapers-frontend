import React from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { checkFormForEmpty, handleInpBlur } from '../../helper/tinyFns';
import { GlobalContext } from '../../context/Context';
import { useNavigate } from 'react-router-dom';
import { updatePassword } from '../../helper/helperFns';
import { signUpFormInpHandler, clearFormInps } from '../../helper/tinyFns';

const ResetPass = () => {
  const { state, dispatch } = GlobalContext();
  const { signUpFormInpValues, loginFormInpValues, verifyFormInpValue } = state;
  const navigate = useNavigate();

  const resetFormHandler = (e) => {
    e.preventDefault();
    const { password, confirm_password } = signUpFormInpValues;
    const { email } = loginFormInpValues;

    const isPasswordValid = checkFormForEmpty(password);
    const isConfPasswordValid = checkFormForEmpty(confirm_password);
    const validPass = /^.{8,}$/;

    if (isPasswordValid && isConfPasswordValid) {
      if (validPass.test(password)) {
        if (password === confirm_password) {
          const updatePromise = updatePassword(email, password);

          toast.promise(updatePromise, {
            loading: 'Updating password',
            success: <b>Password updated successfully</b>,
            error: <b>Could not update password. Try again.</b>,
          });

          updatePromise.then(() => {
            navigate('/login');
            dispatch({
              type: 'HANDLE_SIGNUP_FORM_INPUTS',
              payload: clearFormInps(signUpFormInpValues),
            });
            dispatch({
              type: 'HANDLE_LOGIN_FORM_INPUTS',
              payload: clearFormInps(loginFormInpValues),
            });
            dispatch({
              type: 'SET_FORM_SESSION',
              payload: {
                verificationSession: false,
                passResetSession: false,
              },
            });
            dispatch({
              type: 'HANDLE_VERIFY_FORM_INPUT',
              payload: clearFormInps(verifyFormInpValue),
            });
          });
        } else {
          toast.error("Password didn't match.");
        }
      } else {
        toast.error('Password must be 8 characters long');
      }
    } else {
      toast.error('Invalid input. Try again.');
    }
  };

  return (
    <section className="form-section">
      <Toaster position="top-center" reverseOrder="false"></Toaster>
      <form className="form" onSubmit={resetFormHandler}>
        <header className="form_heading">
          <h2>Reset your password</h2>
        </header>
        <main className="form-main">
          {/* New password input */}
          <label htmlFor="" className="form-label">
            New password
          </label>
          <input
            id="OTP"
            type="password"
            name="password"
            className="form-inp"
            required
            value={signUpFormInpValues.password}
            onChange={(e) => signUpFormInpHandler(e, dispatch)}
            onBlur={(e) => handleInpBlur(e)}
          />

          {/* Confirm new password input */}
          <label htmlFor="" className="form-label">
            Confirm password
          </label>
          <input
            id="OTP"
            type="password"
            name="confirm_password"
            className="form-inp"
            required
            value={signUpFormInpValues.confirm_password}
            onChange={(e) => signUpFormInpHandler(e, dispatch)}
            onBlur={(e) => handleInpBlur(e)}
          />

          <button className="btn form-btn login-form-btn">Reset</button>
        </main>
      </form>
    </section>
  );
};

export default ResetPass;
