import { useDispatch } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./src/Redux/Reducer";

const AuthStore = createStore(reducer, applyMiddleware(thunk));

export default AuthStore;

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof AuthStore.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
