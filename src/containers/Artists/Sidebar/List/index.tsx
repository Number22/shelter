import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { Tabbable } from 'reakit';
import styled, { css } from 'styled-components';

import { IRootStateType } from '@app/store/reducers';

const Wrapper = styled.div``;

const RowWrapper = styled.ul``;

const Row = styled(Tabbable)<{ isActive?: boolean; forwardedAs: string }>`
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 32px;
  padding-left: 8px;
  outline: none;

  &:hover,
  &:focus {
    background: var(--color-4);
  }

  ${props =>
    props.isActive &&
    css`
      background: var(--color-2);
      color: var(--color-5);

      &:focus,
      &:hover {
        background: var(--color-2);
      }
    `}
`;

const Letter = styled.h2`
  font-size: 40px;
  cursor: default;
  user-select: none;
  margin-left: 10px;
  font-weight: bold;
`;

interface IListProps {
  items: MusicKit.Resource[];
  letter: string;
  onSelect: (id: string) => void;
}

const List: FC<IListProps> = ({ items, letter, onSelect }) => {
  const currentArtist = useSelector((store: IRootStateType) => store.library.currentArtist);

  return (
    <Wrapper>
      <Letter>{letter}</Letter>
      <RowWrapper>
        {items.map(({ attributes, id }) => (
          <Row
            forwardedAs="li"
            isActive={currentArtist && currentArtist.id === id}
            key={attributes.name}
            onClick={() => onSelect(id)}
          >
            {attributes.name}
          </Row>
        ))}
      </RowWrapper>
    </Wrapper>
  );
};

export default List;
