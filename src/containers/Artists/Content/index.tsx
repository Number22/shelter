import React, { FC } from 'react';
import styled from 'styled-components';

import Scroll from '@app/components/Scroll';
import Album from './Album';

const StyledScroll = styled(Scroll)`
  width: 100%;
`;

interface IContentProps {
  className?: string;
  albums: MusicKit.Resource[];
  artistName: string;
}

const Content: FC<IContentProps> = ({ className, albums, artistName }) => {
  return (
    <StyledScroll className={className}>
      {albums.map(album => (
        <Album key={album.id} attributes={album.attributes} tracks={album.relationships.tracks.data} />
      ))}
    </StyledScroll>
  );
};

export default Content;
