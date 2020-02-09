import { all, fork } from 'redux-saga/effects';

import librarySaga from './library/saga';
import playerSaga from './player/saga';

export default function* rootSaga() {
  yield all([librarySaga, playerSaga].map(fork));
}
