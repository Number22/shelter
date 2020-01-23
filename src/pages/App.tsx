import React, { FC } from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

import GlobalStyles from '@app/styles/global';
import Footer from '../containers/Footer';

const StyledApp = styled.div``;

interface IAppProps {
  musicInstance: MusicKit.MusicKitInstance;
}

const App: FC<IAppProps> = ({ musicInstance }) => {
  musicInstance.player.play();

  musicInstance.authorize().then(() => {
    musicInstance.player.play();
  });

  musicInstance.authorize().then(() => {
    musicInstance.api.library.albums(null).then(cloudAlbums => {
      // console.log(cloudAlbums);
    });

    musicInstance.api.library.artists(null).then(cloudArtists => {
      // console.log(cloudArtists);
    });

    musicInstance.api.recentPlayed().then(recentPlayed => {
      // console.log(recentPlayed);
    });
  });

  return (
    <StyledApp>
      <GlobalStyles />
      <Footer musicInstance={musicInstance} />
    </StyledApp>
  );
};

declare let module: object;

export default hot(module)(App);
