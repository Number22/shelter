import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';

import LeftPart from './LeftPart';
import MainPart from './MainPart';
import RightPart from './RightPart';

const Wrapper = styled.div`
  position: relative;
  border-top: 1px solid var(--border-color);
  height: 56px;
  width: 100%;
  background: var(--background-color);
`;

const BottomPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLeftPart = styled(LeftPart)`
  position: absolute;
  left: 0;
`;

const StyledRightPart = styled(RightPart)`
  position: absolute;
  right: 0;
`;

const StyledMainPart = styled(MainPart)`
  height: 100%;
  min-width: 400px;
`;

const Footer: FC = () => {
  const onPlayHandle = () => {};
  const onPauseHandle = () => {};
  const onVolumeChangeHandle = (value: number) => {};
  const onProgressChangeHandle = (value: number) => {};
  const onForwardHandle = () => {};
  const onBackwardHandle = () => {};

  return (
    <Wrapper>
      <BottomPart>
        <StyledLeftPart />
        <StyledMainPart
          onVolumeChange={onVolumeChangeHandle}
          onPause={onPauseHandle}
          onPlay={onPauseHandle}
          onForward={onForwardHandle}
          onBackward={onBackwardHandle}
        />
        <StyledRightPart />
      </BottomPart>
    </Wrapper>
  );
};

export default Footer;
