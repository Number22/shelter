import React, { FC } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import styled from 'styled-components';

import GlobalStyles from '@app/styles/global';

import Artists from '../containers/Artists';
import Footer from '../containers/Footer';
import Header from '../containers/Header';

const StyledApp = styled.div`
  height: 100%;
`;

const PageWrapper = styled.div`
  height: calc(100% - 112px);
`;

const App: FC = () => {
  return (
    <Router>
      <StyledApp>
        <GlobalStyles />
        <Header />

        <PageWrapper>
          <Switch>
            <Redirect exact={true} from="/" to="library" />
            <Route path="/library">
              <Artists />
            </Route>
            <Route path="/for-you" />
            <Route path="/discover" />
            <Route path="/radio" />
            <Route path="/connect" />
          </Switch>
        </PageWrapper>
        <Footer />
      </StyledApp>
    </Router>
  );
};

declare let module: object;

export default hot(module)(App);
