import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./src/Redux/Reducer";

const AuthStore = createStore(reducer, applyMiddleware(thunk));

export default AuthStore;
