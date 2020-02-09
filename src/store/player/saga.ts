import { eventChannel } from 'redux-saga';
import { call, debounce, put, take, takeEvery } from 'redux-saga/effects';

import musicInstance from '@app/api';

import {
  changePosition,
  changeQueue,
  changeState,
  changeTime,
  changeToMediaAtIndex,
  changeToMediaItem,
  mute,
  pause,
  play,
  playLater,
  playNext,
  prepareToPlay,
  seekToTime,
  setQueue,
  skipToNextItem,
  skipToPreviousItem,
  stop,
} from '.';

enum EVENT_TYPES {
  POSITION = 1,
  STATE = 2,
  QUEUE = 3,
  TIME = 4,
}

const changeChannel = () => {
  return eventChannel(emit => {
    const positionChangeHandler = data => {
      emit({ data, type: EVENT_TYPES.POSITION });
    };

    const stateChangeHandler = data => {
      emit({
        data,
        type: EVENT_TYPES.STATE,
      });
    };

    const queueChangeHandler = data => {
      emit({ data, type: EVENT_TYPES.QUEUE });
    };

    const timeChangeHandler = ({ currentPlaybackDuration, currentPlaybackTime, currentPlaybackTimeRemaining }) => {
      emit({
        data: {
          duration: currentPlaybackDuration,
          time: currentPlaybackTime,
          timeRemaining: currentPlaybackTimeRemaining,
        },
        type: EVENT_TYPES.TIME,
      });
    };

    musicInstance.player.addEventListener(MusicKit.Events.queueItemsDidChange, queueChangeHandler);
    musicInstance.player.addEventListener(MusicKit.Events.playbackStateDidChange, stateChangeHandler);
    musicInstance.player.addEventListener(MusicKit.Events.queuePositionDidChange, positionChangeHandler);
    musicInstance.player.addEventListener(MusicKit.Events.playbackTimeDidChange, timeChangeHandler);

    const unsubscribe = () => {
      musicInstance.player.removeEventListener(MusicKit.Events.queuePositionDidChange, positionChangeHandler);
      musicInstance.player.removeEventListener(MusicKit.Events.playbackStateDidChange, stateChangeHandler);
      musicInstance.player.removeEventListener(MusicKit.Events.queueItemsDidChange, queueChangeHandler);
      musicInstance.player.removeEventListener(MusicKit.Events.playbackTimeDidChange, timeChangeHandler);
    };

    return unsubscribe;
  });
};

function* initSaga() {
  const channel = yield call(changeChannel);

  while (true) {
    const { data, type } = yield take(channel);
    switch (type) {
      case EVENT_TYPES.POSITION: {
        yield put(changePosition(data));
        break;
      }
      case EVENT_TYPES.QUEUE: {
        yield put(changeQueue(data));
        break;
      }
      case EVENT_TYPES.STATE: {
        yield put(changeState(data));
        break;
      }
      case EVENT_TYPES.TIME: {
        yield put(changeTime(data));
        break;
      }
    }
  }
}

function* pauseSaga(action: ReturnType<typeof pause>) {
  try {
    yield musicInstance.player.pause();
  } catch (e) {
    // tslint:disable-next-line: no-console
    console.error(e);
  }
}

function* stopSaga(action: ReturnType<typeof stop>) {
  try {
    yield musicInstance.player.stop();
  } catch (e) {
    // tslint:disable-next-line: no-console
    console.error(e);
  }
}

function* muteSaga(action: ReturnType<typeof mute>) {
  yield musicInstance.player.mute();
}

function* changeToMediaAtIndexSaga(action: ReturnType<typeof changeToMediaAtIndex.request>) {
  try {
    const response = yield musicInstance.player.changeToMediaAtIndex(action.payload);

    yield put(changeToMediaAtIndex.success(response));
  } catch (e) {
    yield put(changeToMediaAtIndex.failure(e));
  }
}

function* changeToMediaItemSaga(action: ReturnType<typeof changeToMediaItem.request>) {
  try {
    const response = yield musicInstance.player.changeToMediaItem(action.payload);

    yield put(changeToMediaItem.success(response));
  } catch (e) {
    yield put(changeToMediaItem.failure(e));
  }
}

function* playSaga(action: ReturnType<typeof play.request>) {
  try {
    const response = yield musicInstance.player.play();

    yield put(play.success(response));
  } catch (e) {
    yield put(play.failure(e));
  }
}

function* playLaterSaga(action: ReturnType<typeof playLater.request>) {
  try {
    const response = yield musicInstance.playLater(action.payload);

    yield put(playLater.success(response));
  } catch (e) {
    yield put(playLater.failure(e));
  }
}

function* playNextSaga(action: ReturnType<typeof playNext.request>) {
  try {
    const response = yield musicInstance.playNext(action.payload);

    yield put(playNext.success(response));
  } catch (e) {
    yield put(playNext.failure(e));
  }
}

function* prepareToPlaySaga(action: ReturnType<typeof prepareToPlay.request>) {
  try {
    const response = yield musicInstance.player.prepareToPlay(action.payload);

    yield put(prepareToPlay.success(response));
  } catch (e) {
    yield put(prepareToPlay.failure(e));
  }
}

function* seekToTimeSaga(action: ReturnType<typeof seekToTime.request>) {
  try {
    const response = yield musicInstance.player.seekToTime(action.payload);

    yield put(seekToTime.success(response));
  } catch (e) {
    yield put(seekToTime.failure(e));
  }
}

function* setQueueSaga(action: ReturnType<typeof setQueue.request>) {
  try {
    const response = yield musicInstance.setQueue(action.payload);
    yield musicInstance.play();

    yield put(setQueue.success(response));
  } catch (e) {
    yield put(setQueue.failure(e));
  }
}

function* skipToNextItemSaga(action: ReturnType<typeof skipToNextItem.request>) {
  try {
    if (musicInstance.player.isPlaying) {
      yield put(stop());
    }

    const response = yield musicInstance.player.skipToNextItem();

    yield put(skipToNextItem.success(response));
  } catch (e) {
    yield put(skipToNextItem.failure(e));
  }
}

function* skipToPreviousItemSaga(action: ReturnType<typeof skipToPreviousItem.request>) {
  try {
    if (musicInstance.player.isPlaying) {
      yield put(stop());
    }

    const response = yield musicInstance.player.skipToPreviousItem();

    yield put(skipToPreviousItem.success(response));
  } catch (e) {
    yield put(skipToPreviousItem.failure(e));
  }
}

export default function* watchChart() {
  yield takeEvery(changeToMediaAtIndex.request, changeToMediaAtIndexSaga);
  yield takeEvery(changeToMediaItem.request, changeToMediaItemSaga);
  yield takeEvery(play.request, playSaga);
  yield takeEvery(playLater.request, playLaterSaga);
  yield takeEvery(playNext.request, playNextSaga);
  yield takeEvery(prepareToPlay.request, prepareToPlaySaga);
  yield debounce(1000, seekToTime.request, seekToTimeSaga);
  yield takeEvery(setQueue.request, setQueueSaga);
  yield takeEvery(skipToNextItem.request, skipToNextItemSaga);
  yield takeEvery(skipToPreviousItem.request, skipToPreviousItemSaga);

  yield takeEvery(pause, pauseSaga);
  yield takeEvery(stop, stopSaga);
  yield takeEvery(mute, muteSaga);
  yield call(initSaga);
}
