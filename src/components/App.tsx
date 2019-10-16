import * as React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

const reactLogo = require('./../assets/img/react_logo.svg');

const StyledApp = styled.div`
  font-family: helvetica, arial, sans-serif;
  padding: 2em;
  border: 5px solid red;

  p {
    background-color: yellow;
  }
`;

class App extends React.Component<{}, undefined> {
  public render() {
    return (
      <StyledApp>
        <h1>Hello World!</h1>
        <p>Foo to the barz</p>
        <img src={reactLogo} height="480" />
      </StyledApp>
    );
  }
}

declare let module: object;

export default hot(module)(App);
