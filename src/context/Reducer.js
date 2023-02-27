import axios from "axios";

const backendURL = "http://localhost:5000";

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

  if (type === "STORE_CONTACT_INFO") {
    const contactInfo = {
      name: state.inputName,
      email: state.inputEmail,
      university: state.inputUniversity,
      msg: state.inputMessage,
    };
    if (
      (state.inputName &&
        state.inputEmail &&
        state.inputUniversity &&
        state.inputMessage) !== ""
    ) {
      axios
        .post(`${backendURL}/contact`, contactInfo)
        .then((res) => res.data)
        .catch((err) => console.log(err.message));

      return {
        ...state,
        showSubmissionMsg: true,
        submissionMsg:
          "Thanks for connecting with us. We'll contact you shortly via email.",
      };
    }
    return {
      ...state,
      showSubmissionMsg: true,
      submissionMsg: "Please provide proper credentials.",
    };
  }

  if (type === "CLEAR_SUBMISSION_MESSAGE") {
    return {
      ...state,
      showSubmissionMsg: false,
      submissionMsg: "",
    };
  }

  if (type === "UPDATE_UNIVERSITY_DATA") {
    return {
      ...state,
      universityData: payload,
      loading: false,
    };
  }

  if (type === "HANDLE_LOADING") {
    return {
      ...state,
      loading: payload,
    };
  }

  if (type === "UPDATE_PAPERS_DATA") {
    return {
      ...state,
      papersData: payload,
      loading: false,
    };
  }

  if (type === "FILTER_PAPERS_BY_COURSE_NAME") {
    const filteredPaperArr = state.papersData.filter((paper) =>
      payload == "" ? paper : paper.courseName == payload
    );
    return {
      ...state,
      papersFiltered: filteredPaperArr,
      arePapersFiltered: true,
    };
  }

  if (type === "FILTER_PAPERS_BY_COURSE_YEAR") {
    if (state.papersFiltered.length < 1) {
      return {
        ...state,
        showAlert: true,
      };
    } else {
      const filteredPaperArr = state.papersFiltered.filter((paper) =>
        payload == "" ? paper : paper.courseYear == payload
      );
      return {
        ...state,
        papersFiltered: filteredPaperArr,
        arePapersFiltered: true,
      };
    }
  }

  if (type === "CLEAR_PAPER_FILTERS") {
    return {
      ...state,
      papersFiltered: [],
      arePapersFiltered: false,
    };
  }

  if (type === "HIDE_ALERT") {
    return {
      ...state,
      showAlert: false,
    };
  }
};
