import React, { FC, useState } from 'react';
import styled from 'styled-components';

import Button from '@app/components/Button';
import ProgressBar from '@app/components/ProgressBar';

import BackwardIcon from '@app/static/icons/backward-solid.svg';
import ForwardIcon from '@app/static/icons/forward-solid.svg';
import PauseIcon from '@app/static/icons/pause-solid.svg';
import PlayIcon from '@app/static/icons/play-solid.svg';
import VolumeDownIcon from '@app/static/icons/volume-down-solid.svg';
import VolumeOffIcon from '@app/static/icons/volume-off-solid.svg';
import VolumeUpIcon from '@app/static/icons/volume-up-solid.svg';

const MIN_VOLUME = 0;
const MAX_VOLUME = 100;
const STEP_VOLUME = 1;

const StyledButton = styled(Button)`
  width: 40px;
`;

const PlayButton = styled(StyledButton)`
  width: 56px;
  height: 56px;
`;

const ForwardButton = styled(StyledButton)``;

const BackwardButton = styled(StyledButton)``;

const PlayerControls = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
`;

const VolumeButton = styled(StyledButton)`
  margin-right: 10px;
`;

const VolumeProgressBar = styled(ProgressBar)`
  width: 150px;
`;

const VolumeWrapper = styled.div`
  width: 200px;
  display: flex;
  position: absolute;
  align-items: center;
  top: 8px;
  right: 0px;
`;

const ProgressWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const TimeProgressBar = styled(ProgressBar)``;

const RemainingTime = styled.span`
  position: absolute;
  bottom: 10px;
  right: 0px;
`;

const PastTime = styled.span`
  position: absolute;
  bottom: 10px;
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
  onVolumeChange: (value: number) => void;
  onPlay: () => void;
  onPause: () => void;
  onForward?: () => void;
  onBackward?: () => void;
  onProgressChange: (value: number) => void;
}

const MainPart: FC<IMainPartProps> = ({
  onVolumeChange,
  onPlay,
  onPause,
  onForward,
  onBackward,
  onProgressChange,
  className,
}) => {
  const [isPlay, setIsPlay] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [volume, setVolume] = useState<number>(50);
  const [remainingTime, setRemainingTime] = useState<string>('4:44');
  const [pastTime, setPastTime] = useState<string>('0:00');

  const changeVolumeHandler = (value: number) => {
    setVolume(value);
    onVolumeChange(value);
  };

  const changeProgressHandler = (value: number) => {
    setProgress(value);
    onProgressChange(value);
  };

  const playHandler = () => {
    const newState = !isPlay;
    if (newState) {
      onPlay();
    } else {
      onPause();
    }
    setIsPlay(newState);
  };

  return (
    <Wrapper className={className}>
      <VolumeWrapper>
        <VolumeButton theme="transparent">
          <VolumeUpIcon width={20} height={20} />
        </VolumeButton>

        <VolumeProgressBar
          min={MIN_VOLUME}
          max={MAX_VOLUME}
          step={STEP_VOLUME}
          value={volume}
          onChange={changeVolumeHandler}
        />
      </VolumeWrapper>

      <PlayerControls>
        <BackwardButton onClick={onBackward} theme="transparent">
          <BackwardIcon width={20} height={20} />
        </BackwardButton>

        <PlayButton theme="transparent" onClick={playHandler}>
          {isPlay ? <PlayIcon width={32} height={32} /> : <PauseIcon width={32} height={32} />}
        </PlayButton>

        <ForwardButton onClick={onForward} theme="transparent">
          <ForwardIcon width={20} height={20} />
        </ForwardButton>
      </PlayerControls>

      <ProgressWrapper>
        <PastTime>{pastTime}</PastTime>
        <TimeProgressBar value={progress} onChange={changeProgressHandler} />
        <RemainingTime>{remainingTime}</RemainingTime>
      </ProgressWrapper>
    </Wrapper>
  );
};

MainPart.defaultProps = {};

export default MainPart;
