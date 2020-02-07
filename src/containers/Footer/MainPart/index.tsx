import React, { FC, useState } from 'react';
import styled from 'styled-components';
import ProgressBar from '@app/components/ProgressBar';
import Button from '@app/components/Button';

import BackwardIcon from '@app/static/icons/backward-solid.svg';
import ForwardIcon from '@app/static/icons/forward-solid.svg';
import PauseIcon from '@app/static/icons/pause-solid.svg';
import PlayIcon from '@app/static/icons/play-solid.svg';

const StyledButton = styled(Button)`
  width: 40px;
`;

const PlayButton = styled(StyledButton)`
  width: 56px;
  height: 48px;
  padding-top: 0px;
  margin-top: 8px;
`;

const ForwardButton = styled(StyledButton)``;

const BackwardButton = styled(StyledButton)``;

const PlayerControls = styled.div`
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
  onVolumeChange: (value: number) => void;
  onPlay: () => void;
  onPause: () => void;
  onForward?: () => void;
  onBackward?: () => void;
}

const MainPart: FC<IMainPartProps> = ({ onVolumeChange, onPlay, onPause, onForward, onBackward, className }) => {
  const [progress, setProgress] = useState<number>(0);
  const [remainingTime, setRemainingTime] = useState<string>('4:44');
  const [pastTime, setPastTime] = useState<string>('0:00');
  const [isPlay, setIsPlay] = useState<boolean>(true);

  const changeProgressHandler = (value: number) => {
    setProgress(value);
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
      <TopPart>
        <PastTime>{pastTime}</PastTime>
        <TimeProgressBar value={progress} onChange={changeProgressHandler} />
        <RemainingTime>{remainingTime}</RemainingTime>
      </TopPart>

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
    </Wrapper>
  );
};

MainPart.defaultProps = {};

export default MainPart;
