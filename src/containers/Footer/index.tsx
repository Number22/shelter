import React, { FC } from 'react';
import styled from 'styled-components';

import Button from '@app/components/Button';

const Wrapper = styled.div``;

interface IFooterProps {}

const Footer: FC<IFooterProps> = ({}) => {
  return (
    <Wrapper>
      <Button>content</Button>
    </Wrapper>
  );
};

export default Footer;
