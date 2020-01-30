import { all, fork } from 'redux-saga/effects';

import librarySaga from './library/saga';

export default function* rootSaga() {
  yield all([librarySaga].map(fork));
}
