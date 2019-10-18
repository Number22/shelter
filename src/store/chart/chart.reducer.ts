import { createReducer } from 'typesafe-actions';

import { Artist, ITagApi, Track } from '../../api/models';
import { chartFetchTopArtistsAction, chartFetchTopTagsAction, chartFetchTopTracksAction } from './chart.action';

export interface IChartState {
  topArtists: {
    data: Artist[];
    error?: Error;
    isLoading: boolean;
  };
  topTags: {
    data: ITagApi[];
    error?: Error;
    isLoading: boolean;
  };
  topTracks: {
    data: Track[];
    error?: Error;
    isLoading: boolean;
  };
}

const initialState: IChartState = {
  topArtists: {
    data: [],
    error: undefined,
    isLoading: false,
  },
  topTags: {
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

const fetchTopTagsReducer = createReducer<IChartState>(initialState)
  .handleAction(chartFetchTopTagsAction.request, (state, action) => ({
    ...state,
    topTags: {
      data: [],
      error: undefined,
      isLoading: true,
    },
  }))
  .handleAction(chartFetchTopTagsAction.success, (state, action) => ({
    ...state,
    topTags: {
      data: action.payload,
      error: undefined,
      isLoading: false,
    },
  }))
  .handleAction(chartFetchTopTagsAction.failure, (state, action) => ({
    ...state,
    topTags: {
      data: [],
      error: action.payload,
      isLoading: false,
    },
  }));

const fetchTopArtistsReducer = createReducer<IChartState>(initialState)
  .handleAction(chartFetchTopArtistsAction.request, (state, action) => ({
    ...state,
    topArtists: {
      data: [],
      error: undefined,
      isLoading: true,
    },
  }))
  .handleAction(chartFetchTopArtistsAction.success, (state, action) => ({
    ...state,
    topArtists: {
      data: action.payload,
      error: undefined,
      isLoading: false,
    },
  }))
  .handleAction(chartFetchTopArtistsAction.failure, (state, action) => ({
    ...state,
    topArtists: {
      data: [],
      error: action.payload,
      isLoading: false,
    },
  }));

const fetchTopTracksReducer = createReducer<IChartState>(initialState)
  .handleAction(chartFetchTopTracksAction.request, (state, action) => ({
    ...state,
    topTracks: {
      data: [],
      error: undefined,
      isLoading: true,
    },
  }))
  .handleAction(chartFetchTopTracksAction.success, (state, action) => ({
    ...state,
    topTracks: {
      data: action.payload,
      error: undefined,
      isLoading: false,
    },
  }))
  .handleAction(chartFetchTopTracksAction.failure, (state, action) => ({
    ...state,
    topTracks: {
      data: [],
      error: action.payload,
      isLoading: false,
    },
  }));

export const chartReducer = createReducer<IChartState>(initialState, {
  ...fetchTopTagsReducer.handlers,
  ...fetchTopArtistsReducer.handlers,
  ...fetchTopTracksReducer.handlers,
});
