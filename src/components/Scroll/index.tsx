import React, { createRef, FC, ReactNode, RefObject, useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';
import SimpleBar from 'simplebar-react';
import smoothscroll from 'smoothscroll-polyfill';
import styled from 'styled-components';

smoothscroll.polyfill();

const INFINITE_SCROLL_OFFSET = 150;
const DEFAULT_SCROLL_MASK_SIZE = 32;

const ScrollWrapper = styled.div<{ isHorizontal: boolean; scrollState: ScrollState; maskSize: number }>`
  height: 100%;
  > [data-simplebar] > .simplebar-wrapper {
    mask-composite: ${props => (props.scrollState === 'active' ? 'source-in' : 'unset')};
    mask-image: ${props => {
      const startGradient = `linear-gradient(${
        props.isHorizontal ? 'to left' : 'to top'
      }, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) ${props.maskSize}px)`;
      const endGradient = `linear-gradient(${
        props.isHorizontal ? 'to right' : 'to bottom'
      }, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) ${props.maskSize}px)`;
      if (props.scrollState === 'active') {
        return `${startGradient}, ${endGradient}`;
      }
      if (props.scrollState === 'start') {
        return startGradient;
      }
      if (props.scrollState === 'end') {
        return endGradient;
      }
      return 'none';
    }};
  }
  .simplebar-horizontal {
    display: none;
  }
`;

export const StyledScroll = styled(SimpleBar)`
  height: 100%;
  margin-bottom: 15px;
`;

export type ScrollState = 'none' | 'start' | 'end' | 'active';

interface IScrollEvent {
  size: number;
  fullSize: number;
  offset: number;
  scrollState: ScrollState;
}

interface IScrollProps {
  children: ReactNode;
  className: string;
  isHorizontal: boolean;
  onLoad: () => void;
  scroll: RefObject<HTMLDivElement>;
  scrollMaxHeight: number;
  maskSize: number;
  onScroll: (event: IScrollEvent) => void;
}

const Scroll: FC<IScrollProps> = ({
  children,
  className,
  isHorizontal,
  onLoad,
  scroll,
  scrollMaxHeight,
  maskSize,
  onScroll,
}) => {
  const windowSize = useWindowSize();
  const defaultScrollState = isHorizontal ? 'none' : 'start';
  const [scrollState, changeScrollState] = useState<ScrollState>(defaultScrollState);

  const wheel = (event: WheelEvent) => {
    if (event.deltaX === 0 && scroll.current) {
      scroll.current.scrollLeft += event.deltaY;
      event.preventDefault();
    }
  };

  const spotScrollState = (isHorizontal: boolean) => {
    if (!scroll.current) {
      return;
    }

    const { offsetHeight, scrollTop, scrollHeight, offsetWidth, scrollLeft, scrollWidth } = scroll.current;
    let currentScrollState: ScrollState = 'none';
    let size = offsetHeight;
    let fullSize = scrollHeight;
    let offset = scrollTop;

    if (isHorizontal) {
      size = offsetWidth;
      fullSize = scrollWidth;
      offset = scrollLeft;
    }

    if (size === fullSize) {
      currentScrollState = 'none';
    } else if (offset <= 0) {
      currentScrollState = 'start';
    } else if (size + offset >= fullSize) {
      currentScrollState = 'end';
    } else {
      currentScrollState = 'active';
    }

    changeScrollState(currentScrollState);
    onScroll({
      size,
      fullSize,
      offset,
      scrollState: currentScrollState,
    });

    if (size + offset + INFINITE_SCROLL_OFFSET >= fullSize && onLoad && fullSize) {
      onLoad();
    }
  };

  useEffect(() => {
    spotScrollState(isHorizontal);
  }, [windowSize.width, isHorizontal, children]);

  useEffect(() => {
    if (isHorizontal && scroll.current) {
      const scrollEl = scroll.current;
      scrollEl.addEventListener('wheel', wheel);
      return () => scrollEl.removeEventListener('wheel', wheel);
    }

    return () => {};
  }, [isHorizontal, scroll]);

  return (
    <ScrollWrapper className={className} isHorizontal={isHorizontal} scrollState={scrollState} maskSize={maskSize}>
      <StyledScroll
        scrollableNodeProps={{
          ref: scroll,
          onScroll: () => spotScrollState(isHorizontal),
        }}
        style={{
          maxHeight: scrollMaxHeight,
        }}
      >
        {children}
      </StyledScroll>
    </ScrollWrapper>
  );
};

Scroll.defaultProps = {
  maskSize: DEFAULT_SCROLL_MASK_SIZE,
};

export default Scroll;
