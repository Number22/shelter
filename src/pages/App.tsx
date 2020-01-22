import React, { FC } from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

import GlobalStyles from '@app/styles/global';
import Footer from '../containers/Footer';

const StyledApp = styled.div`
  font-family: helvetica, arial, sans-serif;
  padding: 2em;
  border: 5px solid red;

  p {
    background-color: yellow;
  }
`;

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
      <h1>Hello World!</h1>
      <p>Foo to the barz</p>
      <button id="apple-music-authorize" />
      <button id="apple-music-unauthorize" />
      <Footer />
    </StyledApp>
  );
};

declare let module: object;

export default hot(module)(App);
