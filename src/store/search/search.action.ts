import { createAsyncAction } from 'typesafe-actions';
import { ISearchRequest } from './search.types';

// tslint:disable-next-line: prettier
export const searchAction = createAsyncAction('@chart/SEARCH', '@chart/SEARCH_SUCCESS', '@chart/SEARCH_FAILURE')<
  ISearchRequest,
  SpotifyApi.SearchResponse,
  Error
>();
