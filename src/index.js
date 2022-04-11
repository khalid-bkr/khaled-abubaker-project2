import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import NavBar from "./components/NavBar";
import { store } from "./app/store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/index.css";
import Home from "./components/Home.jsx";

// import { createStore } from "@reduxjs/toolkit";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <NavBar></NavBar> */}
      {/* <Home /> */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
