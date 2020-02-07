import React, { FC, useState } from 'react';
import styled from 'styled-components';

import Button from '@app/components/Button';
import ProgressBar from '@app/components/ProgressBar';

import HeartIcon from '@app/static/icons/heart-solid.svg';
import AddIcon from '@app/static/icons/plus-solid.svg';
import RandomIcon from '@app/static/icons/random-solid.svg';
import AddPlaylistIcon from '@app/static/icons/stream-solid.svg';
import RepeatIcon from '@app/static/icons/sync-alt-solid.svg';

const MIN_VOLUME = 0;
const MAX_VOLUME = 100;
const STEP_VOLUME = 1;

const StyledButton = styled(Button)`
  width: 40px;
`;

const LikeButton = styled(StyledButton)``;

const RepeatButton = styled(StyledButton)``;

const RandomButton = styled(StyledButton)``;

const AddInLibraryButton = styled(StyledButton)``;

const AddInPlaylistButton = styled(StyledButton)``;

const VolumeProgressBar = styled(ProgressBar)`
  width: 184px;
  position: absolute;
  top: -10px;
  right: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

interface IRightProps {
  className?: string;
  onRepeat?: () => void;
  onRandom?: () => void;
  onLike?: () => void;
  onAdd?: () => void;
  onAddToPlaylist?: () => void;
  onVolumeChange?: () => void;
}

const RightPart: FC<IRightProps> = ({
  onRepeat,
  onRandom,
  onLike,
  onAdd,
  onAddToPlaylist,
  onVolumeChange,
  className,
}) => {
  const [volume, setVolume] = useState<number>(50);

  const changeVolumeHandler = (value: number) => {
    setVolume(value);
    onVolumeChange(value);
  };

  return (
    <Wrapper className={className}>
      <VolumeProgressBar
        min={MIN_VOLUME}
        max={MAX_VOLUME}
        step={STEP_VOLUME}
        value={volume}
        onChange={changeVolumeHandler}
      />

      <AddInLibraryButton onClick={onAdd} theme="transparent">
        <AddIcon width={20} height={20} />
      </AddInLibraryButton>

      <AddInPlaylistButton onClick={onAddToPlaylist} theme="transparent">
        <AddPlaylistIcon width={20} height={20} />
      </AddInPlaylistButton>

      <LikeButton onClick={onLike} theme="transparent">
        <HeartIcon width={20} height={20} />
      </LikeButton>

      <RepeatButton onClick={onRepeat} theme="transparent">
        <RepeatIcon width={20} height={20} />
      </RepeatButton>

      <RandomButton onClick={onRandom} theme="transparent">
        <RandomIcon width={20} height={20} />
      </RandomButton>
    </Wrapper>
  );
};

RightPart.defaultProps = {
  onAdd: () => false,
  onAddToPlaylist: () => false,
  onLike: () => false,
  onRandom: () => false,
  onRepeat: () => false,
  onVolumeChange: () => false,
};

export default RightPart;
