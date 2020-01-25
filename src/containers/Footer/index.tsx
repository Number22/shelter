import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import Button from '@app/components/Button';

import LeftPart from './LeftPart';
import MainPart from './MainPart';
import RightPart from './RightPart';

const Wrapper = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const StyledLeftPart = styled(LeftPart)`
  margin-right: auto;
`;

const StyledRightPart = styled(RightPart)`
  margin-left: auto;
`;

const StyledMainPart = styled(MainPart)`
  height: 100%;
  min-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

interface IFooterProps {}

const Footer: FC<IFooterProps> = () => {
  const onPlayHandle = () => {};
  const onPauseHandle = () => {};
  const onVolumeChangeHandle = (value: number) => {};
  const onProgressChangeHandle = (value: number) => {};
  const onForwardHandle = () => {};
  const onBackwardHandle = () => {};

  return (
    <Wrapper>
      <StyledLeftPart />
      <StyledMainPart
        onVolumeChange={onVolumeChangeHandle}
        onPause={onPauseHandle}
        onPlay={onPauseHandle}
        onProgressChange={onProgressChangeHandle}
        onForward={onForwardHandle}
        onBackward={onBackwardHandle}
      />
      <StyledRightPart />
    </Wrapper>
  );
};

export default Footer;
