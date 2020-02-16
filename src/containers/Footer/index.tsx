import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

import { pause, play, seekToTime, skipToNextItem, skipToPreviousItem } from '@app/store/player';
import { IRootStateType } from '@app/store/reducers';

import CurrentSong from './CurrentSong';
import MainPart from './MainPart';
import RightPart from './RightPart';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-top: 1px solid var(--color-7);
  height: 56px;
  width: 100%;
  background: var(--color-5);
`;

const StyledCurrentSong = styled(CurrentSong)`
  height: 100%;
  width: 320px;
  position: absolute;
  left: 0;
`;

const StyledRightPart = styled(RightPart)`
  position: absolute;
  height: 100%;
  right: 0;
`;

const StyledMainPart = styled(MainPart)`
  height: 100%;
  min-width: 400px;
`;

const Footer: FC = () => {
  const dispatch = useDispatch();
  const duration = useSelector((store: IRootStateType) => store.player.duration);
  const time = useSelector((store: IRootStateType) => store.player.time);
  const timeRemaining = useSelector((store: IRootStateType) => store.player.timeRemaining);
  const currentItem = useSelector((store: IRootStateType) => store.player.currentItem);
  const playerState = useSelector((store: IRootStateType) => store.player.state);

  const onPlayHandler = () => {
    dispatch(play.request());
  };

  const onPauseHandler = () => {
    dispatch(pause());
  };

  const onProgressChangeHandler = (value: number) => {
    dispatch(seekToTime.request(value));
  };

  const onVolumeChangeHandler = (value: number) => value;

  const onForwardHandler = () => {
    dispatch(skipToNextItem.request());
  };

  const onBackwardHandler = () => {
    dispatch(skipToPreviousItem.request());
  };

  return (
    <Wrapper>
      <StyledCurrentSong currentItem={currentItem} />
      <StyledMainPart
        playerState={playerState}
        duration={duration}
        time={time}
        timeRemaining={timeRemaining}
        onProgressChange={onProgressChangeHandler}
        onVolumeChange={onVolumeChangeHandler}
        onPause={onPauseHandler}
        onPlay={onPlayHandler}
        onForward={onForwardHandler}
        onBackward={onBackwardHandler}
      />
      <StyledRightPart onVolumeChange={onVolumeChangeHandler} />
    </Wrapper>
  );
};

export default Footer;
