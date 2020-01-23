import React, { FC } from 'react';
import styled from 'styled-components';

import Button from '@app/components/Button';

import FileAltIcon from '@app/static/icons/file-alt-solid.svg';

const StyledButton = styled(Button)`
  width: 40px;
`;

const LyricButton = styled(StyledButton)``;

const Wrapper = styled.div``;

interface ILeftPartProps {
  className?: string;
  onGetLyrics?: () => void;
}

const LeftPart: FC<ILeftPartProps> = ({ onGetLyrics, className }) => {
  return (
    <Wrapper className={className}>
      <LyricButton theme="transparent">
        <FileAltIcon width={20} height={20} />
      </LyricButton>
    </Wrapper>
  );
};

LeftPart.defaultProps = {
  onGetLyrics: () => false,
};

export default LeftPart;
