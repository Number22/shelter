import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding-top: 8px;
  padding-bottom: 8px;
  cursor: pointer;
`;

const Title = styled.span``;

const TrackNumber = styled.span`
  color: grey;
  margin-right: 8px;
  font-feature-settings: 'tnum' on, 'lnum' on;
`;

const Duration = styled.span`
  color: grey;
  font-feature-settings: 'tnum' on, 'lnum' on;
`;

const LeftPart = styled.div``;

const RightPart = styled.div``;

interface ITrackProps {
  id: string;
  trackNumber: number;
  name: string;
  duration: string;
}

const Track: FC<ITrackProps> = ({ trackNumber, name, duration }) => {
  return (
    <Wrapper>
      <LeftPart>
        <TrackNumber>{trackNumber}</TrackNumber>
        <Title>{name}</Title>
      </LeftPart>
      <RightPart>
        <Duration>{duration}</Duration>
      </RightPart>
    </Wrapper>
  );
};

export default Track;
