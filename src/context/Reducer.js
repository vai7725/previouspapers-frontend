import axios from 'axios';

export const reducer = (state, action) => {
  const { type, payload } = action;
  if (type === 'THROW_ERROR') {
    return {
      ...state,
      throwError: true,
      errorMsg: payload,
    };
  }

  if (type === 'WELCOME_SCREEN') {
    if (payload) {
      return {
        ...state,
        userHitForFirstTime: false,
      };
    } else {
      return {
        ...state,
        userHitForFirstTime: true,
      };
    }
  }

  if (type === 'SET_USER_VISITED') {
    axios
      .put(`${state.backendURL}/updatetraffic`)
      .then((res) =>
        localStorage.setItem(
          'visitCredentials',
          JSON.stringify({ visited: true })
        )
      )
      .catch((err) => console.log(err));
    return {
      ...state,
      userHitForFirstTime: false,
    };
  }

  if (type === 'TOGGLE_SM_NAV_LINKS') {
    return {
      ...state,
      smNavLinksOpen: !payload,
    };
  }
  if (type === 'CLOSE_SM_NAV_LINKS') {
    return {
      ...state,
      smNavLinksOpen: false,
    };
  }
  if (type === 'HANDLE_FORM_NAME') {
    return {
      ...state,
      inputName: payload,
    };
  }
  if (type === 'HANDLE_FORM_EMAIL') {
    return {
      ...state,
      inputEmail: payload,
    };
  }
  if (type === 'HANDLE_FORM_UNIVERSITY') {
    return {
      ...state,
      inputUniversity: payload,
    };
  }
  if (type === 'HANDLE_FORM_MESSAGE') {
    return {
      ...state,
      inputMessage: payload,
    };
  }

  if (type === 'STORE_CONTACT_INFO') {
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
        state.inputMessage) !== ''
    ) {
      axios
        .post(`${state.backendURL}/contact`, contactInfo)
        .then((res) => res.data)
        .catch((err) => console.log(err.message));

      return {
        ...state,
        showSubmissionMsg: true,
        submissionMsg:
          "Thanks for connecting with us. We'll contact you shortly via email.",
        inputName: '',
        inputEmail: '',
        inputUniversity: '',
        inputMessage: '',
      };
    } else {
      return {
        ...state,
        showSubmissionMsg: true,
        submissionMsg: 'Enter form details correctly.',
      };
    }
  }

  if (type === 'CLEAR_SUBMISSION_MESSAGE') {
    return {
      ...state,
      showSubmissionMsg: false,
      submissionMsg: '',
    };
  }

  if (type === 'UPDATE_UNIVERSITY_DATA') {
    return {
      ...state,
      universityData: payload,
      loading: false,
    };
  }

  if (type === 'HANDLE_LOADING') {
    return {
      ...state,
      loading: payload,
    };
  }

  if (type === 'UPDATE_PAPERS_DATA') {
    return {
      ...state,
      papersData: payload,
      loading: false,
    };
  }

  if (type === 'SET_INITIAL_COURSE_NAME_FILTER_ITEMS') {
    return {
      ...state,
      courseNameArr: payload,
    };
  }

  if (type === 'CLEAR_PAPER_FILTERS') {
    return {
      ...state,
      papersFiltered: [],
      arePapersFiltered: false,
    };
  }

  if (type === 'HIDE_ALERT') {
    return {
      ...state,
      showAlert: false,
    };
  }

  if (type === 'HIDE_FILTER_SIDEBAR') {
    return {
      ...state,
      showFilterSidebar: payload,
    };
  }

  if (type === 'TOGGLE_FILTER_OPTIONS') {
    return {
      ...state,
      ...payload,
    };
  }

  if (type === 'UPDATE_COURSE_YEAR_FILTER_OPTION_DATA') {
    return {
      ...state,
      courseYear: payload,
    };
  }

  if (type === 'ADD_COURSE_NAME_VALUE_FILTER_OPTION_OBJ') {
    const filtered = state.papersData.filter(
      (paper) => paper.courseName === payload
    );

    const updatedCourseYearArr = Array.from(
      new Set(filtered.map((paper) => paper.courseYear))
    ).map((item) => ({ id: crypto.randomUUID(), item, isChecked: false }));

    return {
      ...state,

      filteredPapersByCourseName: filtered,
      courseYearArr: updatedCourseYearArr,
    };
  }

  if (type === 'ADD_COURSE_YEAR_VALUE_FILTER_OPTION_OBJ') {
    const filtered = state.filteredPapersByCourseName.filter(
      (paper) => paper.courseYear === payload
    );

    const updatedPaperTitleArr = Array.from(
      new Set(filtered.map((paper) => paper.paperTitle))
    ).map((item) => ({ id: crypto.randomUUID(), item, isChecked: false }));

    return {
      ...state,
      filteredPapersByCourseYear: filtered,
      paperTitleArr: updatedPaperTitleArr,
    };
  }

  if (type === 'ADD_PAPER_TITLE_VALUE_FILTER_OPTION_OBJ') {
    const filtered = state.filteredPapersByCourseYear.filter(
      (paper) => paper.paperTitle === payload
    );

    const updatedPaperYearArr = Array.from(
      new Set(filtered.map((paper) => paper.paperYear))
    ).map((item) => ({ id: crypto.randomUUID(), item, isChecked: false }));

    return {
      ...state,
      filteredPapersByPaperTitle: filtered,
      paperYearArr: updatedPaperYearArr,
    };
  }

  if (type === 'ADD_PAPER_YEAR_VALUE_FILTER_OPTION_OBJ') {
    const filtered = state.filteredPapersByPaperTitle.filter(
      (paper) => paper.paperYear === payload
    );

    return {
      ...state,
      filteredPapersByPaperYear: filtered,
      showFilterSidebar: window.innerWidth > '576' ? true : false,
    };
  }

  if (type === 'CLEAR_FILTERS') {
    return {
      ...state,
      filteredPapersByCourseName: [],
      filteredPapersByCourseYear: [],
      filteredPapersByPaperTitle: [],
      filteredPapersByPaperYear: [],
      showFilterSidebar: window.innerWidth > '576' ? true : false,

      ...payload,
    };
  }
  if (type === 'SET_PROGRESS_BAR') {
    return {
      ...state,
      loaderProgress: payload,
    };
  }
};
