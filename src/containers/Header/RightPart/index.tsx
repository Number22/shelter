import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

import Button from '@app/components/Button';
import Modal from '@app/components/Modal';
import Scroll from '@app/components/Scroll';
import ListSolidIcon from '@app/static/icons/list-solid.svg';
import { IRootStateType } from '@app/store/reducers';

import Track from './Track';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const QueueButton = styled(Button)`
  width: 40px;

  svg {
    max-height: 16px;
    max-width: 16px;
    min-height: 16px;
    min-width: 16px;
  }
`;

const StyledModal = styled(Modal)`
  width: 400px;
  transform: none !important;
  right: 0;
  top: 0;
  transform-origin: unset;
  left: unset;
  height: 100%;
  border-radius: 0;
`;

interface IRightPartProps {
  className?: string;
}

const RightPart: FC<IRightPartProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const queue = useSelector((state: IRootStateType) => state.player.queue);
  const currentItem = useSelector((store: IRootStateType) => store.player.currentItem);
  const openQueueHandler = () => {
    setIsOpen(!isOpen);
  };

  const closeHandler = () => {
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <QueueButton onClick={openQueueHandler} theme="transparent">
        <ListSolidIcon />
      </QueueButton>

      {isOpen && (
        <StyledModal onClose={closeHandler}>
          <Scroll>
            {queue.map(track => (
              <Track key={track.id} media={track} isActive={currentItem!.id === track.id} />
            ))}
          </Scroll>
        </StyledModal>
      )}
    </Wrapper>
  );
};

export default RightPart;
