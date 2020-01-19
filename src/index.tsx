import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import MusicProvider from './api';
import App from './pages/App';
import { store } from './store/store';

const rootEl = document.getElementById('root');

const instance = MusicProvider.createInstance();
instance.configure();
const musicInstance = instance.getMusicInstance();

render(
  <Provider store={store}>
    <App musicInstance={musicInstance} />
  </Provider>,
  rootEl,
);
