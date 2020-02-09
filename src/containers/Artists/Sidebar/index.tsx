import React, { FC } from 'react';

import groupBy from 'lodash/groupBy';
import map from 'lodash/map';
import styled from 'styled-components';

import Scroll from '@app/components/Scroll';

import List from './List';

const StyledScroll = styled(Scroll)`
  height: 100%;
  width: 300px;
  border-right: 1px solid var(--border-color);
`;

interface ISidebarProps {
  onSelect: (id: string) => void;
  onLoad?: () => void;
  artists: MusicKit.Resource[];
}

const Sidebar: FC<ISidebarProps> = ({ artists, onLoad, onSelect }) => {
  const groups = groupBy(artists, artist => artist.attributes.name[0].toUpperCase());

  return (
    <StyledScroll onLoad={onLoad}>
      {map(groups, (group, letter) => (
        <List key={letter} letter={letter} items={group} onSelect={onSelect} />
      ))}
    </StyledScroll>
  );
};

Sidebar.defaultProps = {
  artists: [],
  onLoad: () => false,
};

export default Sidebar;
