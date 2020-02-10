import { createAction, createAsyncAction } from 'typesafe-actions';

export const changeState = createAction('@player/CHANGE_STATE')<{
  oldState: MusicKit.PlaybackStates;
  state: MusicKit.PlaybackStates;
}>();
export const changeQueue = createAction('@player/CHANGE_QUEUE')<MusicKit.Media[]>();
export const changePosition = createAction('@player/CHANGE_POSITION')<{ oldPosition: number; position: number }>();
export const changeTime = createAction('@player/CHANGE_TIME')<{
  duration: number;
  time: number;
  timeRemaining: number;
}>();

export const pause = createAction('@player/PAUSE')();
export const stop = createAction('@player/STOP')();
export const mute = createAction('@player/MUTE')();

export const play = createAsyncAction('@player/PLAY', '@player/PLAY_SUCCESS', '@player/PLAY_FAILURE')<
  undefined,
  MusicKit.MediaItemPosition,
  Error
>();

export const prepareToPlay = createAsyncAction(
  '@player/PREPARE_TO_PLAY',
  '@player/PREPARE_TO_PLAY_SUCCESS',
  '@player/PREPARE_TO_PLAY_FAILURE',
)<MusicKit.descriptor, void, Error>();

export const seekToTime = createAsyncAction(
  '@player/SEEK_TO_TIME',
  '@player/SEEK_TO_TIME_SUCCESS',
  '@player/SEEK_TO_TIME_FAILURE',
)<number, void, Error>();

export const skipToNextItem = createAsyncAction(
  '@player/SKIP_TO_NEXT_ITEM',
  '@player/SKIP_TO_NEXT_ITEM_SUCCESS',
  '@player/SKIP_TO_NEXT_ITEM_FAILURE',
)<undefined, MusicKit.MediaItemPosition, Error>();

export const skipToPreviousItem = createAsyncAction(
  '@player/SKIP_TO_PREVIOUS_ITEM',
  '@player/SKIP_TO_PREVIOUS_ITEM_SUCCESS',
  '@player/SKIP_TO_PREVIOUS_ITEM_FAILURE',
)<undefined, MusicKit.MediaItemPosition, Error>();

export const changeToMediaAtIndex = createAsyncAction(
  '@player/CHANGE_TO_MEDIA_AT_INDEX',
  '@player/CHANGE_TO_MEDIA_AT_INDEX_SUCCESS',
  '@player/CHANGE_TO_MEDIA_AT_INDEX_FAILURE',
)<number, MusicKit.MediaItemPosition, Error>();

export const changeToMediaItem = createAsyncAction(
  '@player/CHANGE_TO_MEDIA_ITEM',
  '@player/CHANGE_TO_MEDIA_ITEM_SUCCESS',
  '@player/CHANGE_TO_MEDIA_ITEM_FAILURE',
)<MusicKit.descriptor, MusicKit.MediaItemPosition, Error>();

export const setQueue = createAsyncAction(
  '@player/SET_QUEUE',
  '@player/SET_QUEUE_SUCCESS',
  '@player/SET_QUEUE_FAILURE',
)<MusicKit.SetQueueOptions, MusicKit.Queue, Error>();

export const playLater = createAsyncAction(
  '@player/PLAY_LATER',
  '@player/PLAY_LATER_SUCCESS',
  '@player/PLAY_LATER_FAILURE',
)<MusicKit.SetQueueOptions, void, Error>();

export const playNext = createAsyncAction(
  '@player/PLAY_NEXT',
  '@player/PLAY_NEXT_SUCCESS',
  '@player/PLAY_NEXT_FAILURE',
)<MusicKit.SetQueueOptions, void, Error>();
