import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    text-decoration: none;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 40ms; 
  }

  body {
    background-color: ${props => props.theme.colorTheme.main.background};
    font-size: 14px;
    color: ${props => props.theme.colors.text};
    font-family: 'Fjalla One', sans-serif;
  }
`