import musicInstance from '@app/api';
import { put, takeEvery } from 'redux-saga/effects';
import {
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

export default function* watchChart() {
  yield takeEvery(changeToMediaAtIndex.request, changeToMediaAtIndexSaga);
  yield takeEvery(changeToMediaItem.request, changeToMediaItemSaga);
  yield takeEvery(play.request, playSaga);
  yield takeEvery(playLater.request, playLaterSaga);
  yield takeEvery(playNext.request, playNextSaga);
  yield takeEvery(prepareToPlay.request, prepareToPlaySaga);
  yield takeEvery(seekToTime.request, seekToTimeSaga);
  yield takeEvery(setQueue.request, setQueueSaga);
  yield takeEvery(skipToNextItem.request, skipToNextItemSaga);
  yield takeEvery(skipToPreviousItem.request, skipToPreviousItemSaga);

  yield takeEvery(pause, pauseSaga);
  yield takeEvery(stop, stopSaga);
  yield takeEvery(mute, muteSaga);
}

function* pauseSaga(action: ReturnType<typeof pause>) {
  yield musicInstance.player.pause();
}

function* stopSaga(action: ReturnType<typeof stop>) {
  yield musicInstance.player.stop();
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

    yield put(setQueue.success(response));
  } catch (e) {
    yield put(setQueue.failure(e));
  }
}

function* skipToNextItemSaga(action: ReturnType<typeof skipToNextItem.request>) {
  try {
    const response = yield musicInstance.player.skipToNextItem();

    yield put(skipToNextItem.success(response));
  } catch (e) {
    yield put(skipToNextItem.failure(e));
  }
}

function* skipToPreviousItemSaga(action: ReturnType<typeof skipToPreviousItem.request>) {
  try {
    const response = yield musicInstance.player.skipToPreviousItem();

    yield put(skipToPreviousItem.success(response));
  } catch (e) {
    yield put(skipToPreviousItem.failure(e));
  }
}
