import * as actionTypes from "./ActionTypes";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import firebaseInitAuth from "../../Firebase/Firebase.init";

firebaseInitAuth();
const auth = getAuth();

export const signUpStartAction = () => {
  return {
    type: actionTypes.SIGN_UP_START,
  };
};
export const signUpSuccessAction = (user: any) => {
  return {
    type: actionTypes.SIGN_UP_SUCCESS,
    user: user,
  };
};
export const signUpFailAction = (error: string) => {
  return {
    type: actionTypes.SIGN_UP_FAIL,
    erorr: error,
  };
};

export const signUpWithEmail =
  (email: string, password: string) => (dispatch: any, getState: any) => {
    dispatch(signUpStartAction());
    return createUserWithEmailAndPassword(auth, email, password);
  };
