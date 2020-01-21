import React, { FC, ReactNode, useEffect } from 'react';
import { Button as ReakitButton } from 'reakit';
import styled, { css } from 'styled-components';

type Theme = 'default' | 'transparent' | 'primary';

const StyledButton = styled(ReakitButton)<{ theme: Theme }>`
  ${props => props.theme === 'default' && css``}

  ${props => props.theme === 'transparent' && css``}

  ${props => props.theme === 'primary' && css``}
`;

interface IButtonProps {
  children: ReactNode | string | number | undefined;
  disabled?: boolean | undefined;
  focusable?: boolean | undefined;
  theme?: Theme;
}

const Button: FC<IButtonProps> = ({ children, disabled, focusable, theme }) => {
  React.useEffect(() => {}, []);

  return (
    <StyledButton disabled={disabled} focusable={focusable} theme={theme}>
      {children}
    </StyledButton>
  );
};

export default Button;
