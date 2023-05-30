import axios from 'axios';
import jwtDecode from 'jwt-decode';
const backendURI = process.env.REACT_APP_SERVER_URI;

export const storeCreds = async (credentials) => {
  try {
    const { data } = await axios.post(
      `${backendURI}/api/storecred`,
      credentials
    );
    return Promise.resolve(data.msg);
  } catch (error) {
    return Promise.reject({ error });
  }
};

export const generateOTP = async (email) => {
  try {
    const { data, status } = await axios.get(`${backendURI}/api/generateotp`, {
      params: { email },
    });
    console.log(data);
    if (status === 201) {
      return Promise.resolve(data);
    }
  } catch (error) {
    return Promise.reject({ error });
  }
};

export const sendMail = async (recepientEmail, emailBody) => {
  try {
    await axios.post(`${backendURI}/api/verifymail`, {
      recepientEmail,
      emailBody,
    });
  } catch (error) {
    return Promise.reject({ error });
  }
};

export const verifyOTP = async (otp) => {
  try {
    const { data, status } = await axios.get(`${backendURI}/api/verifyotp`, {
      params: { code: otp },
    });
    console.log(status);
    return Promise.resolve({ data, status });
  } catch (error) {
    return Promise.reject({ error });
  }
};

export const registerUser = async (credentials) => {
  try {
    const { data } = await axios.post(
      `${backendURI}/api/register`,
      credentials
    );
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject({ error });
  }
};

export const loginUser = async (credentials) => {
  try {
    const res = await axios.post(`${backendURI}/api/login`, credentials);
    console.log(res.data.token);
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject({ error });
  }
};

export const getUser = async (token) => {
  try {
    const res = await axios.get(`${backendURI}/api/getuser`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject({ error });
  }
};

export const logOutUser = (navigate, dispatch, toast) => {
  try {
    localStorage.removeItem('token');
    dispatch({ type: 'SET_USER_LOGGED_IN', payload: false });
    dispatch({ type: 'SET_USER_CREDENTIALS', payload: {} });
    dispatch({ type: 'TOGGLE_PROFILE_BTN_MODAL', payload: false });
    toast.success('You have been successfully logged out!');
    navigate('/');
  } catch (error) {
    toast.error('Some error occured...');
  }
};

export const updatePassword = async (email, password) => {
  try {
    const res = await axios.post(`${backendURI}/api/resetpassword`, {
      email,
      password,
    });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject({ error });
  }
};

export const contact = async (userMsg) => {
  try {
    const res = await axios.post(`${backendURI}/api/contact`, userMsg);
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject({ error });
  }
};

export const setUserLoggedIn = (token, dispatch) => {
  try {
    if (!token) {
      return dispatch({ type: 'SET_USER_LOGGED_IN', payload: false });
    }
    const decodedToken = jwtDecode(token);
    const expiryDate = new Date(decodedToken.exp * 1000);
    const today = new Date();
    const isExpired = expiryDate < today;
    if (isExpired) {
      localStorage.removeItem(token);
      return dispatch({ type: 'SET_USER_LOGGED_IN', payload: false });
    }
    return dispatch({ type: 'SET_USER_LOGGED_IN', payload: true });
  } catch (error) {
    console.log('invalid token');
    return dispatch({ type: 'SET_USER_LOGGED_IN', payload: false });
  }
};

const capitalize = (name) => {
  const firstLetter = name[0].toUpperCase();
  const restOfWord = name.slice(1);

  return firstLetter + restOfWord;
};

export const emailBodyProvider = (
  type,
  { firstName = 'User', clientDomain, code }
) => {
  const signUpOTP = {
    subject: `OTP verification for ${clientDomain}`,
    body: `
    <header>
      <h1>Dear ${capitalize(firstName)} </h1>
    </header>
    <main>
    <p>Thank you for joining ${clientDomain}, your go-to destination for accessing a vast collection of previous year question papers. We are thrilled to have you as a member of our community!</p>
    </br>
    <p>To complete your registration and ensure the security of your account, we require you to verify your email address. Please use the following One-Time Password (OTP) to verify your account:</p>
    </br>
    <h2>OTP: ${code}</h2>
    </br>
    <p>Please enter this OTP on the verification page of our website within the next 10 minutes to successfully verify your email address.</p>
    </br>
    <p>We are excited to have you on board, and we look forward to supporting your academic pursuits. If you have any questions or require any assistance, please feel free to reach out to our team.<p>
    </br>
    </main>
    <footer>
      <p>Regards</p>
      <p>Team ${clientDomain}</p>
    </footer>
    `,
  };

  const recoverOTP = {
    subject: `Password Reset OTP verification for ${clientDomain}`,
    body: `
    <header>
      <h1>Dear ${firstName} </h1>
    </header>
    <main>
      <p>We received a request to reset your password for your account at ${clientDomain}</p>
      </br>
      <p>To proceed with the password reset process, please use the following One-Time Password (OTP):</p>
      </br>
      <h2>OTP: ${code}</h2>
    </br>
    <p>
    Please enter this OTP on the password reset page of our website within the next 10 minutes. This OTP is unique and will allow you to set a new password for your account.
    </p>
    </br>
    <p>
    At ${clientDomain}, we strive to provide seamless access to previous year question papers, aiding you in your academic journey. We understand the importance of having the right resources at your fingertips, and our platform is designed to meet your needs effectively.
    </p>
    </main>
    <footer>
      <p>Regards</p>
      <p>Team ${clientDomain}</p>
    </footer>
    `,
  };

  if (type === 'signUp') {
    return signUpOTP;
  }
  if (type === 'resetOTP') {
    return recoverOTP;
  }
};
