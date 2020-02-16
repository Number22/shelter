import React, { FC } from 'react';

import styled from 'styled-components';

import AppleIcon from '@app/static/icons/apple-brands.svg';

const Wrapper = styled.div``;

const Logo = styled.div`
  margin-left: 8px;
  display: flex;
  align-items: flex-end;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  cursor: default;

  svg {
    margin-right: 4px;
    width: 24px;
    height: 24px;
  }
`;

interface ILeftPartProps {
  className?: string;
}

const LeftPart: FC<ILeftPartProps> = ({}) => {
  return (
    <Wrapper>
      <Logo>
        <AppleIcon /> MUSIC
      </Logo>
    </Wrapper>
  );
};

export default LeftPart;
