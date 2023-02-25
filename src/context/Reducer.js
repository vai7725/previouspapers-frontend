export const reducer = (state, action) => {
  const { type, payload } = action;
  if (type === "TOGGLE_SM_NAV_LINKS") {
    return {
      ...state,
      smNavLinksOpen: !payload,
    };
  }
  if (type === "CLOSE_SM_NAV_LINKS") {
    return {
      ...state,
      smNavLinksOpen: false,
    };
  }
  if (type === "HANDLE_FORM_NAME") {
    return {
      ...state,
      inputName: payload,
    };
  }
  if (type === "HANDLE_FORM_EMAIL") {
    return {
      ...state,
      inputEmail: payload,
    };
  }
  if (type === "HANDLE_FORM_UNIVERSITY") {
    return {
      ...state,
      inputUniversity: payload,
    };
  }
  if (type === "HANDLE_FORM_MESSAGE") {
    return {
      ...state,
      inputMessage: payload,
    };
  }
};
