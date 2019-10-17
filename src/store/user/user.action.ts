import { createAsyncAction } from 'typesafe-actions';
import { Album, Artist, Track } from '../../api/models';
import { ITopRequest } from './user.types';

export const fetchTopAlbumsAction = createAsyncAction(
  '@user/FETCH_TOP_ALBUMS',
  '@user/FETCH_TOP_ALBUMS_SUCCESS',
  '@user/FETCH_TOP_ALBUMS_FAILURE',
)<undefined | ITopRequest, Album[], Error>();

export const fetchTopArtistsAction = createAsyncAction(
  '@user/FETCH_TOP_ARTISTS',
  '@user/FETCH_TOP_ARTISTS_SUCCESS',
  '@user/FETCH_TOP_ARTISTS_FAILURE',
)<undefined | ITopRequest, Artist[], Error>();

export const fetchTopTracksAction = createAsyncAction(
  '@user/FETCH_TOP_TRACKS',
  '@user/FETCH_TOP_TRACKS_SUCCESS',
  '@user/FETCH_TOP_TRACKS_FAILURE',
)<undefined | ITopRequest, Track[], Error>();
