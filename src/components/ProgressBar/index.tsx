import React, { FC, useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import styled from 'styled-components';

export const Track = styled.div`
  height: 3px;
  width: 100%;
  border-radius: 4px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 20px;
    display: block;
    bottom: -10px;
  }
`;

const Thumb = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 12px;
  background-color: black;
`;

const Wrapper = styled.div``;

interface IProgressBarProps {
  className?: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
}

const ProgressBar: FC<IProgressBarProps> = ({ className, value, onChange, min, max, step }) => {
  return (
    <Wrapper className={className}>
      <Range
        step={step}
        min={min}
        max={max}
        values={[value]}
        onChange={values => onChange(values[0])}
        renderTrack={({ props, children }) => (
          <Track
            {...props}
            style={{
              ...props.style,
              background: getTrackBackground({
                values: [value],
                colors: ['black', 'var(--border-color)'],
                min: min as number,
                max: max as number,
              }),
            }}
          >
            {children}
          </Track>
        )}
        renderThumb={({ props }) => <Thumb />}
      />
    </Wrapper>
  );
};

ProgressBar.defaultProps = {
  min: 0,
  max: 100,
  step: 0.1,
};

export default ProgressBar;
