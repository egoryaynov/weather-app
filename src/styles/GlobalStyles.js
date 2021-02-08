import {createGlobalStyle} from "styled-components";
import {colors} from "./variables";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Carmen Sans', -apple-system, BlinkMacSystemFont, serif;
    font-weight: normal;
    font-size: 10px;
    color: ${colors.greyFontColorDark};
    background-color: ${colors.bodyBgColor};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;