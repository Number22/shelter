import React, { FC } from 'react';

import styled, { css } from 'styled-components';

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(100% - 128px);
`;

const Title = styled.span`
  font-size: 16px;
  line-height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SubTitle = styled.span`
  font-size: 14px;
  line-height: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Cover = styled.img`
  height: 48px;
  width: 48px;
  margin-right: 16px;
`;

const Time = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

const Wrapper = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  position: relative;
  display: flex;
  height: 64px;
  padding: 8px;

  &:hover,
  &:focus {
    background: var(--color-4);
  }

  ${props =>
    props.isActive &&
    css`
      background: var(--color-2);
      color: var(--color-5);

      &:hover,
      &:focus {
        background: var(--color-2);
      }
    `}
`;

// tslint:disable-next-line: no-empty-interface
interface ITrackProps {
  media: MusicKit.Media;
  isActive: boolean;
}

const Track: FC<ITrackProps> = ({ media, isActive }) => {
  const { albumInfo, title, container } = media;

  const artworkUrl = container.attributes
    ? MusicKit.formatArtworkURL(container.attributes.artwork, 100, 100)
    : undefined;

  const time = MusicKit.formatMediaTime(media.attributes.durationInMillis / 1000, ':');

  return (
    <Wrapper isActive={isActive}>
      <Cover src={artworkUrl} />
      <Info>
        <Title>{title} </Title>
        <SubTitle>{albumInfo}</SubTitle>
      </Info>
      <Time>{time}</Time>
    </Wrapper>
  );
};

export default Track;
