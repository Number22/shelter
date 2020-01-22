import React, { FC, ReactNode, useEffect } from 'react';
import { Button as ReakitButton } from 'reakit';
import styled, { css } from 'styled-components';

type Theme = 'default' | 'transparent' | 'primary';

const StyledButton = styled(ReakitButton)<{ theme: Theme }>`
  cursor: pointer;
  padding-right: 8px;
  padding-left: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 4px;
  height: 32px;
  width: 100%;
  user-select: none;
  outline: none;
  border-width: 1px;
  border-style: solid;
  border-color: #C6C6C6;

  ${props => props.theme === 'default' && css``}

  ${props =>
    props.theme === 'transparent' &&
    css`
      border-color: transparent;
    `}

  ${props => props.theme === 'primary' && css``}
`;

interface IButtonProps {
  children: ReactNode | string | number | undefined;
  disabled?: boolean | undefined;
  focusable?: boolean | undefined;
  theme?: Theme;
}

const Button: FC<IButtonProps> = ({ children, disabled, focusable, theme = 'transparent' }) => {
  React.useEffect(() => {}, []);

  return (
    <StyledButton disabled={disabled} focusable={focusable} theme={theme}>
      {children}
    </StyledButton>
  );
};

export default Button;
