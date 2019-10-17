import { put, select, takeEvery } from 'redux-saga/effects';

import { client } from '../../api/client';
import { fetchTopAlbumsAction, fetchTopArtistsAction, fetchTopTracksAction } from './user.action';

export default function* watchFun() {
  yield takeEvery(fetchTopAlbumsAction.request, fetchTopAlbumsSaga);
  yield takeEvery(fetchTopArtistsAction.request, fetchTopArtistsSaga);
  yield takeEvery(fetchTopTracksAction.request, fetchTopTracksSaga);
}

function* fetchTopAlbumsSaga(action: ReturnType<typeof fetchTopAlbumsAction.request>) {
  try {
    const data = yield client.get(action.payload);

    yield put(fetchTopAlbumsAction.success(data));
  } catch (e) {
    yield put(fetchTopAlbumsAction.failure(e));
  }
}

function* fetchTopArtistsSaga(action: ReturnType<typeof fetchTopArtistsAction.request>) {
  try {
    const data = yield client.get(action.payload);

    yield put(fetchTopArtistsAction.success(data));
  } catch (e) {
    yield put(fetchTopArtistsAction.failure(e));
  }
}

function* fetchTopTracksSaga(action: ReturnType<typeof fetchTopTracksAction.request>) {
  try {
    const data = yield client.get(action.payload);

    yield put(fetchTopTracksAction.success(data));
  } catch (e) {
    yield put(fetchTopTracksAction.failure(e));
  }
}
