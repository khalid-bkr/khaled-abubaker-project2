import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";

import { store } from "./app/store";
import { Provider } from "react-redux";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/index.css";

// import { createStore } from "@reduxjs/toolkit";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
