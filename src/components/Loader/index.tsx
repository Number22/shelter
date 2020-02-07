import React, { FC } from 'react';
import styled from 'styled-components';

import AppleIcon from '@app/static/icons/apple-brands.svg';

const LoadingText = styled.p``;

const Logo = styled(AppleIcon)`
  width: 56px;
  height: 56px;
  margin-bottom: 16px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* animation: text-loading 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) infinite both;

  @keyframes text-loading {
    0% {
      filter: opacity(100%);
    }
    50% {
      filter: opacity(0%);
    }
    100% {
      filter: opacity(100%);
    }
  } */
`;

interface ILoaderProps {
  className?: string;
}

const Loader: FC<ILoaderProps> = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Logo />
      <LoadingText>Music</LoadingText>
    </Wrapper>
  );
};

export default Loader;
