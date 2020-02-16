import React, { FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import styled from 'styled-components';

import Toolbar from '@app/components/Toolbar';

const Wrapper = styled.div``;

const StyledToolbar = styled(Toolbar)`
  font-size: 16px;
`;

interface IControlsProps {
  className?: string;
}

const ITEMS = [
  { label: 'Library', path: '/library' },
  { label: 'For You', path: '/for-you' },
  { label: 'Discover', path: '/discover' },
  { label: 'Radio', path: '/radio' },
  { label: 'Connect', path: '/connect' },
];

const Controls: FC<IControlsProps> = ({}) => {
  const history = useHistory();
  const location = useLocation();

  const items = ITEMS.map(({ label, path }) => ({
    label,
    action: () => history.push(path),
    isActive: location.pathname.includes(path),
  }));

  return (
    <Wrapper>
      <StyledToolbar items={items} ariaLabel="controls" />
    </Wrapper>
  );
};

export default Controls;
