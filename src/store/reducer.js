import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user";

export default combineReducers({
  user: userReducer,
});
