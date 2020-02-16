import React, { FC } from 'react';

import styled from 'styled-components';

import Button from '@app/components/Button';
import ProgressBar from '@app/components/ProgressBar';
import BackwardIcon from '@app/static/icons/backward-solid.svg';
import ForwardIcon from '@app/static/icons/forward-solid.svg';
import PauseIcon from '@app/static/icons/pause-solid.svg';
import PlayIcon from '@app/static/icons/play-solid.svg';

const StyledButton = styled(Button)`
  width: 40px;
`;

const PlayButton = styled(StyledButton)`
  width: 48px;
  height: 48px;
  padding-top: 0px;
  margin-top: 7px;
`;

const ForwardButton = styled(StyledButton)``;

const BackwardButton = styled(StyledButton)``;

const PlayerControls = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const TopPart = styled.div`
  z-index: 100;
  width: 100%;
  position: relative;
`;

const TimeProgressBar = styled(ProgressBar)`
  position: absolute;
  top: -2px;
  width: 100%;
  z-index: 100;
`;

const RemainingTime = styled.span`
  position: absolute;
  top: 10px;
  right: 0px;
`;

const PastTime = styled.span`
  position: absolute;
  top: 10px;
  left: 0px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface IMainPartProps {
  className?: string;
  time: number;
  timeRemaining: number;
  duration: number;
  playerState: MusicKit.PlaybackStates;
  onProgressChange: (value: number) => void;
  onVolumeChange: (value: number) => void;
  onPlay: () => void;
  onPause: () => void;
  onForward?: () => void;
  onBackward?: () => void;
}

const MainPart: FC<IMainPartProps> = ({
  onVolumeChange,
  onProgressChange,
  onPlay,
  onPause,
  onForward,
  onBackward,
  playerState,
  time = 0,
  timeRemaining = 0,
  duration = 0,
  className,
}) => {
  const remainingTime = MusicKit.formatMediaTime(timeRemaining, ':');
  const pastTime = MusicKit.formatMediaTime(time, ':');
  const isPlay = playerState === MusicKit.PlaybackStates.playing;

  const changeProgressHandler = (value: number) => {
    onProgressChange(value);
  };

  const playHandler = () => {
    if (isPlay) {
      onPause();
    } else {
      onPlay();
    }
  };

  return (
    <Wrapper className={className}>
      <TopPart>
        <PastTime>{pastTime}</PastTime>
        <TimeProgressBar value={time} onChange={changeProgressHandler} max={duration || 100} />
        <RemainingTime>{remainingTime}</RemainingTime>
      </TopPart>

      <PlayerControls>
        <BackwardButton onClick={onBackward} theme="transparent">
          <BackwardIcon width={16} height={16} />
        </BackwardButton>

        <PlayButton theme="transparent" onClick={playHandler}>
          {isPlay ? <PauseIcon width={28} height={28} /> : <PlayIcon width={28} height={28} />}
        </PlayButton>

        <ForwardButton onClick={onForward} theme="transparent">
          <ForwardIcon width={16} height={16} />
        </ForwardButton>
      </PlayerControls>
    </Wrapper>
  );
};

MainPart.defaultProps = {};

export default MainPart;
