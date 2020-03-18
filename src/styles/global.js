import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: none !important;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  a {
    text-decoration: none !important;
    color: inherit !important;
  }

  html {
    scroll-behavior: smooth;
  }
`;
