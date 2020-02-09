import React, { FC } from 'react';

import styled from 'styled-components';

import Button from '@app/components/Button';
import Image from '@app/components/Image';

const SongWrapper = styled.div`
  height: 100%;
  display: flex;
  width: calc(100% - 40px);
`;

const Cover = styled(Image)`
  top: -1px;
  height: 56px;
  width: 56px;
  margin-right: 8px;
`;

const SongInfo = styled.div`
  cursor: default;
  display: flex;
  flex-direction: column;
  width: calc(100% - 64px);
  justify-content: center;
`;

const Title = styled.span`
  line-height: 20px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.span`
  font-size: 12px;
  color: var(--description-color);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

interface ICurrentSongProps {
  className?: string;
  currentItem: MusicKit.MediaItem | null;
}

const CurrentSong: FC<ICurrentSongProps> = ({ onGetLyrics, className, currentItem }) => {
  if (!currentItem) {
    return null;
  }

  const { albumInfo, title, container } = currentItem;

  const artworkUrl = container.attributes
    ? MusicKit.formatArtworkURL(container.attributes.artwork, 100, 100)
    : undefined;

  return (
    <Wrapper className={className}>
      <SongWrapper>
        <Cover src={artworkUrl} />
        <SongInfo>
          <Title title={title}>{title}</Title>
          <Description title={albumInfo}>{albumInfo}</Description>
        </SongInfo>
      </SongWrapper>
    </Wrapper>
  );
};

export default CurrentSong;
