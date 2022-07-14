import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.Config";

const firebaseInitAuth = () => {
  const app = initializeApp(firebaseConfig);
};

export default firebaseInitAuth;
