import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: white;
    box-sizing: border-box;
    font-family: canada-type-gibson, sans-serif;
    font-weight: 300;
    font-size: 12pt;
    scroll-behavior: smooth;
    }
`;

export default GlobalStyle;
