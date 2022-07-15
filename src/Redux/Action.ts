import * as actionTypes from "./ActionTypes";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import firebaseInitAuth from "../../Firebase/Firebase.init";
import axios from "axios";

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

export const onAuthChange = () => (dispatch: any, getState: any) => {
  dispatch(signUpStartAction());
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const url = "https://todoapkapi.herokuapp.com/login/signin";
      axios
        .post(url, {
          email: user.email,
        })
        .then((res: any) => {
          dispatch(signUpSuccessAction(res.data.data));
        })
        .catch((err: any) => {
          dispatch(signUpFailAction(err.message));
        });
    }
  });
};

export const signInWithEmail =
  (email: string, password: string) => (dispatch: any, getState: any) => {
    dispatch(signUpStartAction());
    return signInWithEmailAndPassword(auth, email, password);
  };
