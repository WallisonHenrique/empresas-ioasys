import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
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
