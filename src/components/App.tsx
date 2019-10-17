import * as React from 'react';
import { hot } from 'react-hot-loader';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { IRootStateType } from '../store/reducers';
import { fetchTopAlbumsAction, fetchTopArtistsAction, fetchTopTracksAction } from '../store/user/user.action';
import { IUserState } from '../store/user/user.reducer';

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
  const user = useSelector<IRootStateType, IUserState>(state => state.user);

  React.useEffect(() => {
    dispatch(fetchTopAlbumsAction.request({ user: 'Dream__Effect' }));
    dispatch(fetchTopArtistsAction.request({ user: 'Dream__Effect' }));
    dispatch(fetchTopTracksAction.request({ user: 'Dream__Effect' }));
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
