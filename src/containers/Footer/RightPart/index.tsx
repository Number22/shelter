import React, { FC } from 'react';
import styled from 'styled-components';

import Button from '@app/components/Button';

import HeartIcon from '@app/static/icons/heart-solid.svg';
import AddIcon from '@app/static/icons/plus-solid.svg';
import RandomIcon from '@app/static/icons/random-solid.svg';
import AddPlaylistIcon from '@app/static/icons/stream-solid.svg';
import RepeatIcon from '@app/static/icons/sync-alt-solid.svg';

const StyledButton = styled(Button)`
  width: 40px;
`;

const LikeButton = styled(StyledButton)``;

const RepeatButton = styled(StyledButton)``;

const RandomButton = styled(StyledButton)``;

const AddInLibraryButton = styled(StyledButton)``;

const AddInPlaylistButton = styled(StyledButton)``;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

interface IRightProps {
  className?: string;
  onRepeat?: () => void;
  onRandom?: () => void;
  onLike?: () => void;
  onAdd?: () => void;
  onAddToPlaylist?: () => void;
}

const RightPart: FC<IRightProps> = ({ onRepeat, onRandom, onLike, onAdd, onAddToPlaylist, className }) => {
  return (
    <Wrapper className={className}>
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
};

export default RightPart;
