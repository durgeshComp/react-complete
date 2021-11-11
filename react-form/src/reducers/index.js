import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";

export const rootReducer = combineReducers({
  auth,
  message,
});