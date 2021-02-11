import {createGlobalStyle} from "styled-components";
import {colors, fonts} from "./variables";

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 10px;
  }

  body {
    margin: 0;
    font-family: ${fonts.CarmenSans};
    font-weight: normal;
    color: ${colors.greyFontColorDark};
    background-color: ${colors.bodyBgColor};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
`;