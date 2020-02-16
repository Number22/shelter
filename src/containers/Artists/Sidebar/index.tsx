import React, { FC } from 'react';

import groupBy from 'lodash/groupBy';
import map from 'lodash/map';
import styled from 'styled-components';

import Scroll from '@app/components/Scroll';

import List from './List';

const StyledScroll = styled(Scroll)`
  height: 100%;
  width: 300px;
  border-right: 1px solid var(--color-7);
`;

const ArtistsGroups = styled.nav`
  padding-top: 32px;
  padding-bottom: 32px;
`;

interface ISidebarProps {
  className?: string;
  onSelect: (id: string) => void;
  onLoad?: () => void;
  artists: MusicKit.Resource[];
}

const Sidebar: FC<ISidebarProps> = ({ artists, onLoad, onSelect, className }) => {
  const groups = groupBy(artists, artist => artist.attributes.name[0].toUpperCase());

  return (
    <StyledScroll onLoad={onLoad} className={className}>
      <ArtistsGroups tabIndex={0}>
        {map(groups, (group, letter) => (
          <List key={letter} letter={letter} items={group} onSelect={onSelect} />
        ))}
      </ArtistsGroups>
    </StyledScroll>
  );
};

Sidebar.defaultProps = {
  artists: [],
  onLoad: () => false,
};

export default Sidebar;
