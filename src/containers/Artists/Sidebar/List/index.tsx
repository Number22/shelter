import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import styled, { css } from 'styled-components';

import { IRootStateType } from '@app/store/reducers';

const Wrapper = styled.div``;

const Row = styled.div<{ isActive?: boolean }>`
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 8px;

  &:hover {
    background: var(--hover-color);
  }

  ${props =>
    props.isActive &&
    css`
      background: var(--text-color);
      color: var(--background-color);

      &:hover {
        background: var(--text-color);
      }
    `}
`;

const Letter = styled.p`
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
      {items.map(({ attributes, id }) => (
        <Row isActive={currentArtist && currentArtist.id === id} onClick={() => onSelect(id)} key={attributes.name}>
          {attributes.name}
        </Row>
      ))}
    </Wrapper>
  );
};

export default List;
