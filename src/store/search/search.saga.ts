import { put, select, takeEvery } from 'redux-saga/effects';

import spotify from '../../api';
import { searchAction } from './search.action';

export default function* watchChart() {
  yield takeEvery(searchAction.request, fetchTopTagsSaga);
}

function* fetchTopTagsSaga(action: ReturnType<typeof searchAction.request>) {
  try {
    const { query, types, options } = action.payload;
    const response: SpotifyApi.SearchResponse = yield spotify.search(query, types, options);

    const data = response;

    yield put(searchAction.success(data));
  } catch (e) {
    yield put(searchAction.failure(e));
  }
}
