import React, { FC } from 'react';

import styled from 'styled-components';

import Controls from './Controls';
import LeftPart from './LeftPart';
import RightPart from './RightPart';

const Wrapper = styled.div`
  border-bottom: 1px solid var(--color-7);
  height: 56px;
  width: 100%;
  background: var(--color-5);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledControls = styled(Controls)``;

// tslint:disable-next-line: no-empty-interface
interface IHeaderProps {}

const Header: FC<IHeaderProps> = ({}) => {
  return (
    <Wrapper>
      <LeftPart />
      <StyledControls />
      <RightPart />
    </Wrapper>
  );
};

export default Header;
