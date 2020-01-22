import { createGlobalStyle, css } from 'styled-components';
import base from './base';
import colors from './colors';

const GlobalStyles = createGlobalStyle`
  :root {
    ${css(colors)};
  }
  ${base};
`;

export default GlobalStyles;
