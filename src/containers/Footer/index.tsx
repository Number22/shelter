import React, { FC } from 'react';
import styled from 'styled-components';

import Button from '@app/components/Button';
import HeartIcon from '@app/static/icons/heart-solid.svg';

const Wrapper = styled.div``;

interface IFooterProps {}

const Footer: FC<IFooterProps> = ({}) => {
  return (
    <Wrapper>
      <Button>
        <HeartIcon width={16} height={16} />
      </Button>
    </Wrapper>
  );
};

export default Footer;
