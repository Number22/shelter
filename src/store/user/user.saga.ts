import { put, select, takeEvery } from 'redux-saga/effects';

import { client } from '../../api/client';
import { Album, Artist, IAlbumApi, IArtistApi, ITrackApi, Track } from '../../api/models';
import { fetchTopAlbumsAction, fetchTopArtistsAction, fetchTopTracksAction } from './user.action';

export default function* watchUser() {
  yield takeEvery(fetchTopAlbumsAction.request, fetchTopAlbumsSaga);
  yield takeEvery(fetchTopArtistsAction.request, fetchTopArtistsSaga);
  yield takeEvery(fetchTopTracksAction.request, fetchTopTracksSaga);
}

function* fetchTopAlbumsSaga(action: ReturnType<typeof fetchTopAlbumsAction.request>) {
  try {
    const response = yield client.get('', {
      params: {
        method: 'user.gettopalbums',
        ...action.payload,
      },
    });

    const data = response.data.topalbums.album.map((item: IAlbumApi) => new Album(item));

    yield put(fetchTopAlbumsAction.success(data));
  } catch (e) {
    yield put(fetchTopAlbumsAction.failure(e));
  }
}

function* fetchTopArtistsSaga(action: ReturnType<typeof fetchTopArtistsAction.request>) {
  try {
    const response = yield client.get('', {
      params: {
        method: 'user.gettopartists',
        ...action.payload,
      },
    });

    const data = response.data.topartists.artist.map((item: IArtistApi) => new Artist(item));

    yield put(fetchTopArtistsAction.success(data));
  } catch (e) {
    yield put(fetchTopArtistsAction.failure(e));
  }
}

function* fetchTopTracksSaga(action: ReturnType<typeof fetchTopTracksAction.request>) {
  try {
    const response = yield client.get('', {
      params: {
        method: 'user.gettoptracks',
        ...action.payload,
      },
    });

    const data = response.data.toptracks.track.map((item: ITrackApi) => new Track(item));

    yield put(fetchTopTracksAction.success(data));
  } catch (e) {
    yield put(fetchTopTracksAction.failure(e));
  }
}
