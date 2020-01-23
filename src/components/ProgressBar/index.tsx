import React, { FC, useState } from 'react';
import { Range } from 'react-range';
import styled from 'styled-components';

const Track = styled.div`
  height: 8px;
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 0.5480567226890756) 0%,
    rgba(9, 9, 121, 0.6012780112044818) 44%,
    rgba(0, 212, 255, 1) 100%
  );
  border-radius: 2px;
`;

const Thumb = styled.div`
  height: 12px;
  width: 5px;
  background-color: black;
  border-radius: 2px;
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
  const [progress, setProgress] = useState(value);

  return (
    <Wrapper className={className}>
      <Range
        step={step}
        min={min}
        max={max}
        values={[value]}
        onChange={values => onChange(values[0])}
        renderTrack={({ props, children }) => <Track {...props}>{children}</Track>}
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
