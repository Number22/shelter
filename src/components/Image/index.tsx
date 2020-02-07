import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import Loader from '@app/components/Loader';

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
`;

const StyledLoader = styled(Loader)`
  top: 0;
  z-index: -1;
  position: absolute;
`;

const StyledImage = styled.img<{ isLoading: boolean }>`
  height: 100%;
  width: 100%;
  background: transparent;
  filter: ${props => (props.isLoading ? 'blur(5px)' : 'none')};
`;

interface IImageProps {
  className?: string;
  src: string;
  thumbnail?: string;
}

const ImageComponent: FC<IImageProps> = ({ className, src, thumbnail }) => {
  const [currentImage, setCurrentImage] = useState(thumbnail);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.onload = (e: Event & { target: { src: string } }) => {
      setCurrentImage(e.target.src);
      setIsLoading(false);
    };
    image.src = src;
  }, []);

  return (
    <Wrapper className={className}>
      <StyledImage isLoading={isLoading} src={currentImage} />
      {isLoading && <StyledLoader />}
    </Wrapper>
  );
};

export default ImageComponent;
