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
      .put(`${state.backendURL}/api/updatetraffic`)
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
      profileModalOpen: false,
    };
  }
  if (type === 'CLOSE_SM_NAV_LINKS') {
    return {
      ...state,
      smNavLinksOpen: false,
    };
  }

  if (type === 'HANDLE_CONTACT_FORM_VALUES') {
    return {
      ...state,
      contactFormInpValues: {
        ...state.contactFormInpValues,
        ...payload,
      },
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
      profileModalOpen: false,
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

  if (type === 'HANDLE_SIGNUP_FORM_INPUTS') {
    return {
      ...state,
      signUpFormInpValues: {
        ...state.signUpFormInpValues,
        ...payload,
      },
    };
  }

  if (type === 'HANDLE_LOGIN_FORM_INPUTS') {
    return {
      ...state,
      loginFormInpValues: {
        ...state.loginFormInpValues,
        ...payload,
      },
    };
  }

  if (type === 'HANDLE_VERIFY_FORM_INPUT') {
    return {
      ...state,
      verifyFormInpValue: payload,
    };
  }

  if (type === 'SET_USER_LOGGED_IN') {
    return {
      ...state,
      isUserLoggedIn: payload,
    };
  }

  if (type === 'SET_USER_CREDENTIALS') {
    return {
      ...state,
      userCredentials: payload,
    };
  }

  if (type === 'TOGGLE_PROFILE_BTN_MODAL') {
    return {
      ...state,
      profileModalOpen: payload,
      smNavLinksOpen: false,
    };
  }

  if (type === 'CLOSE_POP_UP') {
    return {
      ...state,
      profileModalOpen: false,
    };
  }

  if (type === 'SET_FORM_SESSION') {
    return {
      ...state,
      formSessions: {
        ...state.formSessions,
        ...payload,
      },
    };
  }
};
