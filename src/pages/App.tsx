import React, { FC } from 'react';
import { hot } from 'react-hot-loader';

import styled from 'styled-components';

import GlobalStyles from '@app/styles/global';

import Artists from '../containers/Artists';
import Footer from '../containers/Footer';

const StyledApp = styled.div`
  height: 100%;
`;

const App: FC = () => {
  return (
    <StyledApp>
      <GlobalStyles />
      <Artists />
      <Footer />
    </StyledApp>
  );
};

declare let module: object;

export default hot(module)(App);
