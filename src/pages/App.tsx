import React, { FC } from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

import GlobalStyles from '@app/styles/global';
import Footer from '../containers/Footer';
import Artists from '../containers/Artists';

const StyledApp = styled.div``;

interface IAppProps {}

const App: FC<IAppProps> = () => {
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
