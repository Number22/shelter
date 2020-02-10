import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

import Image from '@app/components/Image';
import { setQueue } from '@app/store/player';
import { IRootStateType } from '@app/store/reducers';

import Track from './Track';

const LeftPart = styled.div`
  margin-right: 16px;
  display: flex;
  flex-direction: column;
`;

const RightPart = styled.div`
  width: calc(100% - 216px);
`;

const Cover = styled(Image)`
  width: 200px;
  height: 200px;
`;

const Title = styled.h2`
  line-height: 32px;
`;

const Description = styled.span`
  line-height: 24px;
`;

const Header = styled.div`
  margin-bottom: 8px;
  cursor: default;
`;

const Info = styled.span`
  margin-top: 16px;
  font-size: 14px;
  line-height: 16px;
  cursor: default;
  display: flex;
  justify-content: space-between;
`;

const Duration = styled.span``;

const SongsCount = styled.span``;

const Tracks = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 32px;
`;

interface IAlbumProps {
  attributes: any;
  id: string;
  tracks: MusicKit.Resource[];
}

const Album: FC<IAlbumProps> = ({ attributes, tracks, id }) => {
  const dispatch = useDispatch();
  const currentItem = useSelector((store: IRootStateType) => store.player.currentItem);
  const { name, releaseDate, duration, genres, trackCount, artwork } = attributes;
  const description = [...genres, releaseDate.split('-')[0]].join(' • ');
  const thumbnailUrl = artwork ? MusicKit.formatArtworkURL(artwork, 25, 25) : undefined;
  const artworkUrl = artwork ? MusicKit.formatArtworkURL(artwork, 200, 200) : undefined;
  const formatDuration = MusicKit.formatMediaTime(duration, ':');

  const onTrackClickHandler = (startPosition: number) => {
    dispatch(setQueue.request({ album: id, startPosition, items: [] }));
  };

  return (
    <Wrapper>
      <LeftPart>
        <Cover src={artworkUrl} thumbnail={thumbnailUrl} />
        <Info>
          <SongsCount>Songs: {trackCount}</SongsCount>
          <Duration>Duration: {formatDuration}</Duration>
        </Info>
      </LeftPart>

      <RightPart>
        <Header>
          <Title>{name}</Title>
          <Description>{description}</Description>
        </Header>
        <Tracks>
          {tracks.map((track, index) => {
            const { id: trackId, attributes: trackAttributes } = track;
            const isActive = Boolean(currentItem && trackId === currentItem.id);

            return (
              <Track
                isActive={isActive}
                onClick={() => onTrackClickHandler(index - 1)}
                key={trackId}
                name={trackAttributes.name}
                duration={trackAttributes.duration}
                trackNumber={trackAttributes.trackNumber}
              />
            );
          })}
        </Tracks>
      </RightPart>
    </Wrapper>
  );
};

export default Album;
