import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

import { rootReducer } from './reducers';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const initialState = {};
const enhancers = [];
const middleware = [routerMiddleware(history), sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  const windowIfDefined = typeof window === 'undefined' ? null : (window as any);
  const devToolsExtension = windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__ || compose;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

export const store = createStore(rootReducer(history), initialState as any, composedEnhancers as any);

sagaMiddleware.run(rootSaga);
