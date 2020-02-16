import React, { FC } from 'react';

import { Separator } from 'reakit';
import styled from 'styled-components';

type OrientationType = 'horizontal' | 'vertical';

const StyledSeparator = styled(Separator)`
  border: 1px solid var(--color-1);
  border-bottom-width: 0;
  border-right-width: 0;
  margin: auto;
`;

interface ISeparatorProps {
  orientation?: OrientationType;
  className?: string;
}

const List: FC<ISeparatorProps> = ({ orientation, className }) => {
  return <StyledSeparator className={className} orientation={orientation} />;
};

export default List;
