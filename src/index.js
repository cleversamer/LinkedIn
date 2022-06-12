import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import App from "./App";
import "./index.css";

const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App store={store} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("app")
);
