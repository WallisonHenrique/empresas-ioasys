import React from "react";
import { Provider } from "react-redux";

import { store } from "./store";

import { Routes } from "./utils/routes";
import LoginProvider from "./components/Login/LoginProvider";

import GlobalStyles from "./styles/global";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <LoginProvider>
        <Routes />
      </LoginProvider>
    </Provider>
  );
};

export default App;
