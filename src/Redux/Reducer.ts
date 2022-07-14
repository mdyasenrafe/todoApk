import * as actionTypes from "./ActionTypes";

interface IState {
  isLoading: boolean;
  error: string;
  user: any | null;
}

const intialState: IState = {
  isLoading: false,
  error: "",
  user: null,
};

const signUpStart = (state: IState, action: any) => {
  return {
    ...state,
    isLoading: true,
  };
};
const signUpSuccess = (state: IState, action: any) => {
  return {
    ...state,
    isLoading: false,
    user: action.user,
  };
};
const signUpFail = (state: IState, action: any) => {
  return {
    ...state,
    isLoading: false,
    error: action.error,
  };
};

export const reducer = (state: IState = intialState, action: any) => {
  switch (action?.type) {
    case actionTypes.SIGN_UP_START:
      return signUpStart(state, action);
    case actionTypes.SIGN_UP_START:
      return signUpSuccess(state, action);
    case actionTypes.SIGN_UP_FAIL:
      return signUpFail(state, action);
    default:
      return state;
  }
};
