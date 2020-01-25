import { createGlobalStyle, css } from 'styled-components';
import base from './base';
import colors from './colors';
import scroll from './scroll';

const GlobalStyles = createGlobalStyle`
  :root {
    ${css(colors)};
    ${scroll}
  }
  ${base};
`;

export default GlobalStyles;
