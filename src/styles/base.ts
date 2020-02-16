import { css } from 'styled-components';

const base = css`
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans+Condensed:400,700&display=swap');

  * {
    -webkit-overflow-scrolling: touch;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
    font-family: 'Fira Sans Condensed', sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  li,
  ul li {
    margin: 0;
    padding: 0;
    text-indent: 0;
    list-style-type: none;
  }

  p {
    padding: 0;
    margin: 0;
  }
  button {
    background: transparent;
    font-size: inherit;
    color: var(--color-1);
  }
  input[type='text'] {
    appearance: none;
  }
  html,
  body {
    all: initial;
    box-sizing: border-box;
    min-width: 320px;
    display: block;
    height: 100vh;
    margin: 0;
    -webkit-tap-highlight-color: transparent;
    color: var(--color-1);
  }

  body > #root {
    height: 100vh;
  }
`;

export default base;
