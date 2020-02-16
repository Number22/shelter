import React, { FC, ReactNode } from 'react';

import { Button as ReakitButton } from 'reakit';
import styled, { css } from 'styled-components';

type Theme = 'default' | 'transparent' | 'primary';

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled(ReakitButton)<{ theme: Theme }>`
  cursor: pointer;
  padding-right: 8px;
  padding-left: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 4px;
  height: 40px;
  width: 100%;
  user-select: none;
  outline: none;
  border-width: 1px;
  border-style: solid;
  border-color: var(--color-1);
  transition: color ease .33s;

  ${props => props.theme === 'default' && css``}

  ${props =>
    props.theme === 'transparent' &&
    css`
      border-color: transparent;

      &:hover {
        color: var(--color-2);
      }
    `}

  ${props => props.theme === 'primary' && css``}
`;

interface IButtonProps {
  className?: string;
  children: ReactNode | string | number | undefined;
  disabled?: boolean | undefined;
  focusable?: boolean | undefined;
  theme?: Theme;
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({ className, children, disabled, focusable, theme = 'default', onClick }) => {
  return (
    <StyledButton onClick={onClick} className={className} disabled={disabled} focusable={focusable} theme={theme}>
      <ButtonContent>{children}</ButtonContent>
    </StyledButton>
  );
};

export default Button;
