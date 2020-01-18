import * as React from 'react';
import { hot } from 'react-hot-loader';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { IRootStateType } from '../store/reducers';
import { searchAction } from '../store/search/search.action';
import { ISearchRequest } from '../store/search/search.types';

const reactLogo = require('./../assets/img/react_logo.svg');

const StyledApp = styled.div`
  font-family: helvetica, arial, sans-serif;
  padding: 2em;
  border: 5px solid red;

  p {
    background-color: yellow;
  }
`;

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const request: ISearchRequest = { query: 'deadmau5', types: ['album', 'artist', 'track'] };
    dispatch(searchAction.request(request));
  }, []);

  return (
    <StyledApp>
      <h1>Hello World!</h1>
      <p>Foo to the barz</p>
      <img src={reactLogo} height="480" />
    </StyledApp>
  );
};

declare let module: object;

export default hot(module)(App);
