import musicInstance from '@app/api';
import flatten from 'lodash/flatten';
import uniq from 'lodash/uniq';
import sumBy from 'lodash/sumBy';
import { all, put, takeEvery } from 'redux-saga/effects';
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
} from '.';

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
    const response = yield musicInstance.api.library.album(id, parameters);

    const data = response;

    yield put(getAlbum.success(data));
  } catch (e) {
    yield put(getAlbum.failure(e));
  }
}

function* getAlbumsSaga(action: ReturnType<typeof getAlbums.request>) {
  try {
    const { ids, parameters } = action.payload;
    const response = yield musicInstance.api.library.albums(ids, parameters);

    const data = response;

    yield put(getAlbums.success(data));
  } catch (e) {
    yield put(getAlbums.failure(e));
  }
}

function* getArtistSaga(action: ReturnType<typeof getArtist.request>) {
  try {
    const { id, parameters } = action.payload;
    const response = yield musicInstance.api.library.artist(id, parameters);
    const albumsIds = response.relationships.albums.data.map(item => item.id);
    const albums = yield all(albumsIds.map(albumId => musicInstance.api.library.album(albumId, { include: 'tracks' })));

    const artistAlbums = albums.map(album => {
      const tracks = album.relationships.tracks.data;
      const genres = uniq(flatten(tracks.map(track => track.attributes.genreNames)));
      const duration = Math.round(sumBy(tracks, track => track.attributes.durationInMillis) / 1000 / 60);
      const releaseDate = tracks.length && tracks[0].attributes.releaseDate;

      return { ...album, attributes: { ...album.attributes, genres, duration, releaseDate } };
    });

    const data = { ...response, albums: artistAlbums };

    yield put(getArtist.success(data));
  } catch (e) {
    yield put(getArtist.failure(e));
  }
}

function* getArtistsSaga(action: ReturnType<typeof getArtists.request>) {
  try {
    const { ids, parameters } = action.payload;
    const response = yield musicInstance.api.library.artists(ids, parameters);

    const data = response;

    yield put(getArtists.success(data));
  } catch (e) {
    yield put(getArtists.failure(e));
  }
}

function* getPlaylistSaga(action: ReturnType<typeof getPlaylist.request>) {
  try {
    const { id, parameters } = action.payload;
    const response = yield musicInstance.api.library.playlist(id, parameters);

    const data = response;

    yield put(getPlaylist.success(data));
  } catch (e) {
    yield put(getPlaylist.failure(e));
  }
}

function* getPlaylistsSaga(action: ReturnType<typeof getPlaylists.request>) {
  try {
    const { ids, parameters } = action.payload;
    const response = yield musicInstance.api.library.playlists(ids, parameters);

    const data = response;

    yield put(getPlaylists.success(data));
  } catch (e) {
    yield put(getPlaylists.failure(e));
  }
}

function* getSongSaga(action: ReturnType<typeof getSong.request>) {
  try {
    const { id, parameters } = action.payload;
    const response = yield musicInstance.api.library.song(id, parameters);

    const data = response;

    yield put(getSong.success(data));
  } catch (e) {
    yield put(getSong.failure(e));
  }
}

function* getSongsSaga(action: ReturnType<typeof getSongs.request>) {
  try {
    const { ids, parameters } = action.payload;
    const response = yield musicInstance.api.library.songs(ids, parameters);

    const data = response;

    yield put(getSongs.success(data));
  } catch (e) {
    yield put(getSongs.failure(e));
  }
}

function* getMusicVideoSaga(action: ReturnType<typeof getMusicVideo.request>) {
  try {
    const { id, parameters } = action.payload;
    const response = yield musicInstance.api.library.musicVideo(id, parameters);

    const data = response;

    yield put(getMusicVideo.success(data));
  } catch (e) {
    yield put(getMusicVideo.failure(e));
  }
}

function* getMusicVideosSaga(action: ReturnType<typeof getMusicVideos.request>) {
  try {
    const { ids, parameters } = action.payload;
    const response = yield musicInstance.api.library.musicVideos(ids, parameters);

    const data = response;

    yield put(getMusicVideos.success(data));
  } catch (e) {
    yield put(getMusicVideos.failure(e));
  }
}

function* searchSaga(action: ReturnType<typeof search.request>) {
  try {
    const { term, parameters } = action.payload;
    const response = yield musicInstance.api.library.search(term, parameters);

    const data = response;

    yield put(search.success(data));
  } catch (e) {
    yield put(search.failure(e));
  }
}
