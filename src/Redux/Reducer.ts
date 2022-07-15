import * as actionTypes from "./ActionTypes";

const intialState: IState = {
  email: {
    isLoading: false,
    error: "",
    user: null,
  },
};

const signUpStart = (state: IState, action: any) => {
  return {
    ...state,
    email: {
      isLoading: true,
      user: null,
      error: null,
    },
  };
};
const signUpSuccess = (state: IState, action: any) => {
  return {
    ...state,
    email: {
      isLoading: false,
      user: action.user,
      error: null,
    },
  };
};
const signUpFail = (state: IState, action: any) => {
  return {
    ...state,
    email: {
      isLoading: false,
      user: null,
      error: action.erorr,
    },
  };
};

export const reducer = (state: IState = intialState, action: any) => {
  switch (action?.type) {
    case actionTypes.SIGN_UP_START:
      return signUpStart(state, action);
    case actionTypes.SIGN_UP_SUCCESS:
      return signUpSuccess(state, action);
    case actionTypes.SIGN_UP_FAIL:
      return signUpFail(state, action);
    default:
      return state;
  }
};
