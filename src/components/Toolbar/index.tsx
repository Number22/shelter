import React, { FC } from 'react';

import { Button } from 'reakit/Button';
import { Toolbar, ToolbarItem, useToolbarState } from 'reakit/Toolbar';
import styled, { css } from 'styled-components';

const StyledToolbar = styled(Toolbar)``;

const StyledToolbarItem = styled(ToolbarItem)<{ forwardedAs: any; isActive?: boolean }>`
  margin-right: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 16px;
  padding-left: 16px;
  border: 1px solid var(--color-7);
  outline: none;
  border-radius: 2px;

  &:hover,
  &:focus {
    cursor: pointer;
    background: var(--color-4);
    border-color: var(--color-4);
  }

  ${props =>
    props.isActive &&
    css`
      background: var(--color-2);
      color: var(--color-5);
      border-color: var(--color-2);

      &:focus,
      &:hover {
        background: var(--color-2);
        border-color: var(--color-2);
      }
    `}
`;

interface IToolbarItem {
  label: string;
  action: () => void;
  isActive?: boolean;
}
// tslint:disable-next-line: no-empty-interface
interface IToolbarProps {
  className?: string;
  ariaLabel: string;
  items: IToolbarItem[];
}

const ToolbarComponent: FC<IToolbarProps> = ({ items, className, ariaLabel }) => {
  const toolbar = useToolbarState({ loop: true });

  return (
    <StyledToolbar className={className} aria-label={ariaLabel}>
      {items.map((item, index) => (
        <StyledToolbarItem {...toolbar} isActive={item.isActive} forwardedAs={Button} onClick={item.action} key={index}>
          {item.label}
        </StyledToolbarItem>
      ))}
    </StyledToolbar>
  );
};

export default ToolbarComponent;
