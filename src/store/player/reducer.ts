import { createReducer } from 'typesafe-actions';

import {
  changePosition,
  changeQueue,
  changeState,
  changeTime,
  changeToMediaAtIndex,
  changeToMediaItem,
  play,
  playLater,
  playNext,
  prepareToPlay,
  seekToTime,
  setQueue,
  skipToNextItem,
  skipToPreviousItem,
} from '.';

export interface IPlayerState {
  isDenyUpdate: boolean;
  duration: number;
  time: number;
  timeRemaining: number;
  oldPosition: number;
  position: number;
  oldState: string;
  state: string;
  currentItem: MusicKit.MediaItem | null;
  queue: MusicKit.MediaItem[];
  isLoading: boolean;
  itemPosition?: MusicKit.MediaItemPosition;
  error?: Error;
}

const initialState: IPlayerState = {
  isDenyUpdate: false,
  duration: 0,
  time: 0,
  timeRemaining: 0,
  oldPosition: 0,
  position: 0,
  currentItem: null,
  oldState: '',
  state: '',
  queue: [],
  isLoading: false,
  itemPosition: undefined,
  error: undefined,
};

const stateReducer = createReducer<IPlayerState>(initialState)
  .handleAction(changePosition, (state, action) => ({
    ...state,
    ...action.payload,
    currentItem: state.queue.length ? state.queue[action.payload.position] : null,
  }))
  .handleAction(changeTime, (state, action) => ({
    ...state,
    ...action.payload,
  }))
  .handleAction(changeQueue, (state, action) => ({
    ...state,
    queue: action.payload,
  }))
  .handleAction(changeState, (state, action) => ({
    ...state,
    ...action.payload,
  }));

const playReducer = createReducer<IPlayerState>(initialState)
  .handleAction(play.request, (state, action) => ({
    ...state,
    isLoading: true,
  }))
  .handleAction(play.success, (state, action) => ({
    ...state,
    isLoading: false,
  }))
  .handleAction(play.failure, (state, action) => ({
    ...state,
    isLoading: false,
  }));

const prepareToPlayReducer = createReducer<IPlayerState>(initialState)
  .handleAction(prepareToPlay.request, (state, action) => ({
    ...state,
    isLoading: true,
  }))
  .handleAction(prepareToPlay.success, (state, action) => ({
    ...state,
    isLoading: false,
  }))
  .handleAction(prepareToPlay.failure, (state, action) => ({
    ...state,
    isLoading: false,
  }));

const seekToTimeReducer = createReducer<IPlayerState>(initialState)
  .handleAction(seekToTime.request, (state, action) => ({
    ...state,
    currentPlaybackTime: action.payload,
    isDenyUpdate: true,
    isLoading: true,
  }))
  .handleAction(seekToTime.success, (state, action) => ({
    ...state,
    isLoading: false,
    isDenyUpdate: false,
  }))
  .handleAction(seekToTime.failure, (state, action) => ({
    ...state,
    isLoading: false,
    isDenyUpdate: false,
  }));

const skipToNextItemReducer = createReducer<IPlayerState>(initialState)
  .handleAction(skipToNextItem.request, (state, action) => ({
    ...state,
    isLoading: true,
  }))
  .handleAction(skipToNextItem.success, (state, action) => ({
    ...state,
    isLoading: false,
  }))
  .handleAction(skipToNextItem.failure, (state, action) => ({
    ...state,
    isLoading: false,
  }));

const skipToPreviousItemReducer = createReducer<IPlayerState>(initialState)
  .handleAction(skipToPreviousItem.request, (state, action) => ({
    ...state,
    isLoading: true,
  }))
  .handleAction(skipToPreviousItem.success, (state, action) => ({
    ...state,
    isLoading: false,
  }))
  .handleAction(skipToPreviousItem.failure, (state, action) => ({
    ...state,
    isLoading: false,
  }));

const changeToMediaAtIndexReducer = createReducer<IPlayerState>(initialState)
  .handleAction(changeToMediaAtIndex.request, (state, action) => ({
    ...state,
    isLoading: true,
  }))
  .handleAction(changeToMediaAtIndex.success, (state, action) => ({
    ...state,
    isLoading: false,
  }))
  .handleAction(changeToMediaAtIndex.failure, (state, action) => ({
    ...state,
    isLoading: false,
  }));

const changeToMediaItemReducer = createReducer<IPlayerState>(initialState)
  .handleAction(changeToMediaItem.request, (state, action) => ({
    ...state,
    isLoading: true,
  }))
  .handleAction(changeToMediaItem.success, (state, action) => ({
    ...state,
    isLoading: false,
  }))
  .handleAction(changeToMediaItem.failure, (state, action) => ({
    ...state,
    isLoading: false,
  }));

const setQueueReducer = createReducer<IPlayerState>(initialState)
  .handleAction(setQueue.request, (state, action) => ({
    ...state,
    isLoading: true,
  }))
  .handleAction(setQueue.success, (state, action) => ({
    ...state,
    isLoading: false,
  }))
  .handleAction(setQueue.failure, (state, action) => ({
    ...state,
    isLoading: false,
  }));

const playLaterReducer = createReducer<IPlayerState>(initialState)
  .handleAction(playLater.request, (state, action) => ({
    ...state,
    isLoading: true,
  }))
  .handleAction(playLater.success, (state, action) => ({
    ...state,
    isLoading: false,
  }))
  .handleAction(playLater.failure, (state, action) => ({
    ...state,
    isLoading: false,
  }));

const playNextReducer = createReducer<IPlayerState>(initialState)
  .handleAction(playNext.request, (state, action) => ({
    ...state,
    isLoading: true,
  }))
  .handleAction(playNext.success, (state, action) => ({
    ...state,
    isLoading: false,
  }))
  .handleAction(playNext.failure, (state, action) => ({
    ...state,
    isLoading: false,
  }));

export const playerReducer = createReducer<IPlayerState>(initialState, {
  ...stateReducer.handlers,
  ...playReducer.handlers,
  ...prepareToPlayReducer.handlers,
  ...seekToTimeReducer.handlers,
  ...skipToNextItemReducer.handlers,
  ...skipToPreviousItemReducer.handlers,
  ...changeToMediaAtIndexReducer.handlers,
  ...changeToMediaItemReducer.handlers,
  ...setQueueReducer.handlers,
  ...playLaterReducer.handlers,
  ...playNextReducer.handlers,
});
