import React, { FC } from 'react';

import styled, { css } from 'styled-components';

const Title = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TrackNumber = styled.span`
  width: 24px;
  color: var(--description-color);
  margin-right: 16px;
  font-feature-settings: 'tnum' on, 'lnum' on;
`;

const Duration = styled.span`
  color: grey;
  font-feature-settings: 'tnum' on, 'lnum' on;
`;

const LeftPart = styled.div`
  width: calc(100% - 100px);
  display: flex;
`;

const RightPart = styled.div``;

const Wrapper = styled.div<{ isActive: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 16px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    background: var(--hover-color);
  }

  ${props =>
    props.isActive &&
    css`
      background: var(--text-color);
      color: var(--background-color);

      &:hover {
        background: var(--text-color);
      }

      ${TrackNumber} {
        color: var(--hover-color);
      }

      ${Duration} {
        color: var(--hover-color);
      }
    `}
`;

interface ITrackProps {
  isActive: boolean;
  trackNumber: number;
  name: string;
  duration: string;
  onClick: () => void;
}

const Track: FC<ITrackProps> = ({ trackNumber, name, duration, onClick, isActive }) => {
  return (
    <Wrapper isActive={isActive} onClick={onClick}>
      <LeftPart>
        <TrackNumber>{trackNumber}</TrackNumber>
        <Title title={name}>{name}</Title>
      </LeftPart>
      <RightPart>
        <Duration>{duration}</Duration>
      </RightPart>
    </Wrapper>
  );
};

export default Track;
