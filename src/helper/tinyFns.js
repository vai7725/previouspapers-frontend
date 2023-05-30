import { toast } from 'react-hot-toast';

export const handleInpBlur = (e) => {
  const key = e.target.id;
  const value = e.target.value;
  if (value === '') {
    toast.error(`${key} cannot be empty`);
  }
  if (value === ' ') {
    toast.error(`Enter a valid value for ${key}`);
  }
};

export const loginPromiseResolver = (res, navigate) => {
  if (res.status === 200) {
    const { token } = res.data;
    localStorage.setItem('token', JSON.stringify(token));
    navigate('/');
  }
};

export const signUpFormInpHandler = (e, dispatch) => {
  dispatch({
    type: 'HANDLE_SIGNUP_FORM_INPUTS',
    payload: {
      [e.target.name]: e.target.value.trim(),
    },
  });
};

export const clearFormInps = (inp) => {
  const type = typeof inp;
  if (type === 'object') {
    for (let key in inp) {
      inp[key] = '';
    }
    console.log(typeof inp);
    return inp;
  }
  return (inp = '');
};

export const checkFormForEmpty = (inp) => {
  const type = typeof inp;
  if (type === 'object') {
    for (let value of Object.values(inp)) {
      if (value === '' || value === ' ') {
        return false;
      }
      return true;
    }
  }
  if (type === 'string') {
    if (inp === '' || inp === ' ') {
      return false;
    }
    return true;
  }
};
