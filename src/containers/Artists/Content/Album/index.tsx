import React, { FC } from 'react';
import styled from 'styled-components';

import Image from '@app/components/Image';
import Track from './Track';

const LeftPart = styled.div`
  margin-right: 16px;
`;

const RightPart = styled.div`
  width: calc(100% - 216px);
`;

const Cover = styled(Image)`
  width: 200px;
  height: 200px;
`;

const Title = styled.h2``;

const Description = styled.span``;

const Header = styled.div`
  margin-bottom: 8px;
  cursor: default;
`;

const Tracks = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 32px;
`;

interface IAlbumProps {
  attributes: any;
  tracks: MusicKit.Resource[];
}

const Album: FC<IAlbumProps> = ({ attributes, tracks }) => {
  const { name, releaseDate, duration, genres, trackCount, artwork } = attributes;
  const description = [...genres, releaseDate.split('-')[0]].join(' • ');
  const thumbnailUrl = MusicKit.formatArtworkURL(artwork, 25, 25);
  const artworkUrl = MusicKit.formatArtworkURL(artwork, 200, 200);
  const albumTracks = tracks.map(({ id, attributes }) => ({
    id,
    trackNumber: attributes.trackNumber,
    name: attributes.name,
    duration: MusicKit.formatMediaTime(attributes.durationInMillis / 1000, ':'),
  }));

  return (
    <Wrapper>
      <LeftPart>
        <Cover src={artworkUrl} thumbnail={thumbnailUrl} />
      </LeftPart>

      <RightPart>
        <Header>
          <Title>{name}</Title>
          <Description>{description}</Description>
        </Header>
        <Tracks>
          {albumTracks.map(track => (
            <Track key={track.id} {...track} />
          ))}
        </Tracks>
      </RightPart>
    </Wrapper>
  );
};

export default Album;
