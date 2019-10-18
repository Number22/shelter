import { all, fork } from 'redux-saga/effects';

import chartSaga from './chart/chart.saga';
import userSaga from './user/user.saga';

export default function* rootSaga() {
  yield all([userSaga, chartSaga].map(fork));
}
