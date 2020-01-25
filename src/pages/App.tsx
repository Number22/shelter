import React, { FC } from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

import GlobalStyles from '@app/styles/global';
import Footer from '../containers/Footer';

const StyledApp = styled.div``;

interface IAppProps {}

const App: FC<IAppProps> = () => {
  return (
    <StyledApp>
      <GlobalStyles />
      <Footer />
    </StyledApp>
  );
};

declare let module: object;

export default hot(module)(App);
