import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";
import store from "./store";

import Routes from "./utils/routes";
import GlobalStyles from "./styles/global";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
