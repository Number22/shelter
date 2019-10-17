import { createAsyncAction } from 'typesafe-actions';
import { Album, Artist, Track } from '../../api/models';

export const fetchTopAlbumsAction = createAsyncAction(
  '@user/FETCH_TOP_ALBUMS',
  '@user/FETCH_TOP_ALBUMS_SUCCESS',
  '@user/FETCH_TOP_ALBUMS_FAILURE',
)<undefined | string, Album[], Error>();

export const fetchTopArtistsAction = createAsyncAction(
  '@user/FETCH_TOP_ARTISTS',
  '@user/FETCH_TOP_ARTISTS_SUCCESS',
  '@user/FETCH_TOP_ARTISTS_FAILURE',
)<undefined | string, Artist[], Error>();

export const fetchTopTracksAction = createAsyncAction(
  '@user/FETCH_TOP_TRACKS',
  '@user/FETCH_TOP_TRACKS_SUCCESS',
  '@user/FETCH_TOP_TRACKS_FAILURE',
)<undefined | string, Track[], Error>();
