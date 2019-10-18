import { createReducer } from 'typesafe-actions';

import { Album, Artist, Track } from '../../api/models';
import { fetchTopAlbumsAction, fetchTopArtistsAction, fetchTopTracksAction } from './user.action';

export interface IUserState {
  topAlbums: {
    data: Album[];
    error?: Error;
    isLoading: boolean;
  };
  topArtists: {
    data: Artist[];
    error?: Error;
    isLoading: boolean;
  };
  topTracks: {
    data: Track[];
    error?: Error;
    isLoading: boolean;
  };
}

const initialState: IUserState = {
  topAlbums: {
    data: [],
    error: undefined,
    isLoading: false,
  },
  topArtists: {
    data: [],
    error: undefined,
    isLoading: false,
  },
  topTracks: {
    data: [],
    error: undefined,
    isLoading: false,
  },
};

const fetchTopAlbumsReducer = createReducer<IUserState>(initialState)
  .handleAction(fetchTopAlbumsAction.request, (state, action) => ({
    ...state,
    topAlbums: {
      data: [],
      error: undefined,
      isLoading: true,
    },
  }))
  .handleAction(fetchTopAlbumsAction.success, (state, action) => ({
    ...state,
    topAlbums: {
      data: action.payload,
      error: null,
      isLoading: false,
    },
  }))
  .handleAction(fetchTopAlbumsAction.failure, (state, action) => ({
    ...state,
    topAlbums: {
      data: [],
      error: action.payload,
      isLoading: false,
    },
  }));

const fetchTopArtistsReducer = createReducer<IUserState>(initialState)
  .handleAction(fetchTopArtistsAction.request, (state, action) => ({
    ...state,
    topArtists: {
      data: [],
      error: undefined,
      isLoading: true,
    },
  }))
  .handleAction(fetchTopArtistsAction.success, (state, action) => ({
    ...state,
    topArtists: {
      data: action.payload,
      error: undefined,
      isLoading: false,
    },
  }))
  .handleAction(fetchTopArtistsAction.failure, (state, action) => ({
    ...state,
    topArtists: {
      data: [],
      error: action.payload,
      isLoading: false,
    },
  }));

const fetchTopTracksReducer = createReducer<IUserState>(initialState)
  .handleAction(fetchTopTracksAction.request, (state, action) => ({
    ...state,
    topTracks: {
      data: [],
      error: undefined,
      isLoading: true,
    },
  }))
  .handleAction(fetchTopTracksAction.success, (state, action) => ({
    ...state,
    topTracks: {
      data: action.payload,
      error: undefined,
      isLoading: false,
    },
  }))
  .handleAction(fetchTopTracksAction.failure, (state, action) => ({
    ...state,
    topTracks: {
      data: [],
      error: action.payload,
      isLoading: false,
    },
  }));

export const userReducer = createReducer<IUserState>(initialState, {
  ...fetchTopAlbumsReducer.handlers,
  ...fetchTopArtistsReducer.handlers,
  ...fetchTopTracksReducer.handlers,
});
