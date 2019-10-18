import { createAsyncAction } from 'typesafe-actions';
import { Artist, Track, ITagApi } from '../../api/models';
import { IChartRequest } from './chart.types';

export const chartFetchTopTagsAction = createAsyncAction(
  '@chart/FETCH_TOP_TAGS',
  '@chart/FETCH_TOP_TAGS_SUCCESS',
  '@chart/FETCH_TOP_TAGS_FAILURE',
)<undefined | IChartRequest, ITagApi[], Error>();

export const chartFetchTopArtistsAction = createAsyncAction(
  '@chart/FETCH_TOP_ARTISTS',
  '@chart/FETCH_TOP_ARTISTS_SUCCESS',
  '@chart/FETCH_TOP_ARTISTS_FAILURE',
)<IChartRequest | undefined, Artist[], Error>();

export const chartFetchTopTracksAction = createAsyncAction(
  '@chart/FETCH_TOP_TRACKS',
  '@chart/FETCH_TOP_TRACKS_SUCCESS',
  '@chart/FETCH_TOP_TRACKS_FAILURE',
)<IChartRequest | undefined, Track[], Error>();
