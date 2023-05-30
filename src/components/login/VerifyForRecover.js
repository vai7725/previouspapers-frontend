import React from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { handleInpBlur } from '../../helper/tinyFns';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/Context';
import { useNavigate } from 'react-router-dom';
import { verifyOTP } from '../../helper/helperFns';
import { clearFormInps } from '../../helper/tinyFns';

const VerifyForRecover = () => {
  const { state, dispatch } = GlobalContext();
  const { verifyFormInpValue } = state;
  const navigate = useNavigate();

  const verificationFormSubmit = (e) => {
    e.preventDefault();
    if (verifyFormInpValue) {
      const verifyPromise = verifyOTP(verifyFormInpValue);
      toast.promise(verifyPromise, {
        loading: 'Verifying OTP...',
        success: <b>OTP verified successfully.</b>,
        error: <b>Invalid OTP</b>,
      });
      verifyPromise.then((res) => {
        if (res.status === 200) {
          navigate('/resetpassword');
        }
        dispatch({
          type: 'HANDLE_VERIFY_FORM_INPUT',
          payload: clearFormInps(verifyFormInpValue),
        });
      });
    }
  };

  return (
    <section className="form-section">
      <Toaster position="top-center" reverseOrder="false"></Toaster>
      <form className="form" onSubmit={verificationFormSubmit}>
        <header className="form_heading">
          <h2>Enter OTP from your email</h2>
          <p>
            If you haven't received the OTP, kindly check your spam folder in
            the mail.
          </p>
        </header>
        <main className="form-main">
          {/* Firstname input */}
          <label htmlFor="" className="form-label">
            OTP
          </label>
          <input
            id="OTP"
            type="number"
            name="otp"
            className="form-inp"
            required
            value={verifyFormInpValue}
            onChange={(e) =>
              dispatch({
                type: 'HANDLE_VERIFY_FORM_INPUT',
                payload: e.target.value,
              })
            }
            onBlur={(e) => handleInpBlur(e)}
          />

          <button className="btn form-btn login-form-btn">Verify</button>
          <span className="form-notation">
            Did not get OTP?{' '}
            <Link className="btn form_notation_btn">Send again</Link>
          </span>
        </main>
      </form>
    </section>
  );
};

export default VerifyForRecover;
