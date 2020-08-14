import React from "react";
export const LoginContext = React.createContext({
  isAuthenticated: false,
  webToken: null,
  signin: (username, password) => {},
  signout: () => {}
});
