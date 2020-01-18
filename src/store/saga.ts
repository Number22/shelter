import { all, fork } from 'redux-saga/effects';

import searchSaga from './search/search.saga';

export default function* rootSaga() {
  yield all([searchSaga].map(fork));
}
