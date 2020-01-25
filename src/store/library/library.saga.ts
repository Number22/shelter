import MusicProvider from '@app/api';
import { put, takeEvery } from 'redux-saga/effects';
import {
  getAlbum,
  getAlbums,
  getArtist,
  getArtists,
  getMusicVideo,
  getMusicVideos,
  getPlaylist,
  getPlaylists,
  getSong,
  getSongs,
  search,
} from './library.action';

const instance = MusicProvider.createInstance();
instance.configure();
const musicInstance = instance.getMusicInstance();

export default function* watchChart() {
  yield takeEvery(getAlbum.request, getAlbumSaga);
  yield takeEvery(getAlbums.request, getAlbumsSaga);
  yield takeEvery(getArtist.request, getArtistSaga);
  yield takeEvery(getArtists.request, getArtistsSaga);
  yield takeEvery(getPlaylist.request, getPlaylistSaga);
  yield takeEvery(getPlaylists.request, getPlaylistsSaga);
  yield takeEvery(getSong.request, getSongSaga);
  yield takeEvery(getSongs.request, getSongsSaga);
  yield takeEvery(getMusicVideo.request, getMusicVideoSaga);
  yield takeEvery(getMusicVideos.request, getMusicVideosSaga);
  yield takeEvery(search.request, searchSaga);
}

function* getAlbumSaga(action: ReturnType<typeof getAlbum.request>) {
  try {
    const { id, parameters } = action.payload;
    const response = yield musicInstance.library.getAlbum(id, parameters);

    const data = response;

    yield put(getAlbum.success(data));
  } catch (e) {
    yield put(getAlbum.failure(e));
  }
}

function* getAlbumsSaga(action: ReturnType<typeof getAlbums.request>) {
  try {
    const { ids, parameters } = action.payload;
    const response = yield musicInstance.library.getAlbums(ids, parameters);

    const data = response;

    yield put(getAlbums.success(data));
  } catch (e) {
    yield put(getAlbums.failure(e));
  }
}

function* getArtistSaga(action: ReturnType<typeof getArtist.request>) {
  try {
    const { id, parameters } = action.payload;
    const response = yield musicInstance.library.getArtist(id, parameters);

    const data = response;

    yield put(getArtist.success(data));
  } catch (e) {
    yield put(getArtist.failure(e));
  }
}

function* getArtistsSaga(action: ReturnType<typeof getArtists.request>) {
  try {
    const { ids, parameters } = action.payload;
    const response = yield musicInstance.library.getArtists(ids, parameters);

    const data = response;

    yield put(getArtists.success(data));
  } catch (e) {
    yield put(getArtists.failure(e));
  }
}

function* getPlaylistSaga(action: ReturnType<typeof getPlaylist.request>) {
  try {
    const { id, parameters } = action.payload;
    const response = yield musicInstance.library.getPlaylist(id, parameters);

    const data = response;

    yield put(getPlaylist.success(data));
  } catch (e) {
    yield put(getPlaylist.failure(e));
  }
}

function* getPlaylistsSaga(action: ReturnType<typeof getPlaylists.request>) {
  try {
    const { ids, parameters } = action.payload;
    const response = yield musicInstance.library.getPlaylists(ids, parameters);

    const data = response;

    yield put(getPlaylists.success(data));
  } catch (e) {
    yield put(getPlaylists.failure(e));
  }
}

function* getSongSaga(action: ReturnType<typeof getSong.request>) {
  try {
    const { id, parameters } = action.payload;
    const response = yield musicInstance.library.getSong(id, parameters);

    const data = response;

    yield put(getSong.success(data));
  } catch (e) {
    yield put(getSong.failure(e));
  }
}

function* getSongsSaga(action: ReturnType<typeof getSongs.request>) {
  try {
    const { ids, parameters } = action.payload;
    const response = yield musicInstance.library.getSongs(ids, parameters);

    const data = response;

    yield put(getSongs.success(data));
  } catch (e) {
    yield put(getSongs.failure(e));
  }
}

function* getMusicVideoSaga(action: ReturnType<typeof getMusicVideo.request>) {
  try {
    const { id, parameters } = action.payload;
    const response = yield musicInstance.library.getMusicVideo(id, parameters);

    const data = response;

    yield put(getMusicVideo.success(data));
  } catch (e) {
    yield put(getMusicVideo.failure(e));
  }
}

function* getMusicVideosSaga(action: ReturnType<typeof getMusicVideos.request>) {
  try {
    const { ids, parameters } = action.payload;
    const response = yield musicInstance.library.getMusicVideos(ids, parameters);

    const data = response;

    yield put(getMusicVideos.success(data));
  } catch (e) {
    yield put(getMusicVideos.failure(e));
  }
}

function* searchSaga(action: ReturnType<typeof search.request>) {
  try {
    const { term, parameters } = action.payload;
    const response = yield musicInstance.library.search(term, parameters);

    const data = response;

    yield put(search.success(data));
  } catch (e) {
    yield put(search.failure(e));
  }
}
