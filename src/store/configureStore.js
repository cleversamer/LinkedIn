/* eslint-disable import/no-anonymous-default-export */
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducer from "./reducer";

export default function () {
  return configureStore({
    reducer,
    middleware: [thunk],
  });
}
