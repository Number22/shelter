import { put, select, takeEvery } from 'redux-saga/effects';

import { client } from '../../api/client';
import { Artist, IArtistApi, ITrackApi, Track } from '../../api/models';
import { chartFetchTopArtistsAction, chartFetchTopTagsAction, chartFetchTopTracksAction } from './chart.action';

export default function* watchChart() {
  yield takeEvery(chartFetchTopTagsAction.request, fetchTopTagsSaga);
  yield takeEvery(chartFetchTopArtistsAction.request, fetchTopArtistsSaga);
  yield takeEvery(chartFetchTopTracksAction.request, fetchTopTracksSaga);
}

function* fetchTopTagsSaga(action: ReturnType<typeof chartFetchTopTagsAction.request>) {
  try {
    const response = yield client.get('', {
      params: {
        method: 'chart.gettoptags',
        ...action.payload,
      },
    });

    const data = response.data.tags.tag;

    yield put(chartFetchTopTagsAction.success(data));
  } catch (e) {
    yield put(chartFetchTopTagsAction.failure(e));
  }
}

function* fetchTopArtistsSaga(action: ReturnType<typeof chartFetchTopArtistsAction.request>) {
  try {
    const response = yield client.get('', {
      params: {
        method: 'chart.gettopartists',
        ...action.payload,
      },
    });

    const data = response.data.artists.artist.map((item: IArtistApi) => new Artist(item));

    yield put(chartFetchTopArtistsAction.success(data));
  } catch (e) {
    yield put(chartFetchTopArtistsAction.failure(e));
  }
}

function* fetchTopTracksSaga(action: ReturnType<typeof chartFetchTopTracksAction.request>) {
  try {
    const response = yield client.get('', {
      params: {
        method: 'chart.gettoptracks',
        ...action.payload,
      },
    });

    const data = response.data.tracks.track.map((item: ITrackApi) => new Track(item));

    yield put(chartFetchTopTracksAction.success(data));
  } catch (e) {
    yield put(chartFetchTopTracksAction.failure(e));
  }
}
