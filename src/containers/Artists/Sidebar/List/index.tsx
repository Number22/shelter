import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { getArtists } from '@app/store/library';
import { IRootStateType } from '@app/store/reducers';

const Wrapper = styled.div``;

const Row = styled.div`
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 8px;

  &:hover {
    background: var(--background-color);
  }
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
  return (
    <Wrapper>
      <Letter>{letter}</Letter>
      {items.map(({ attributes, id }) => (
        <Row onClick={() => onSelect(id)} key={attributes.name}>
          {attributes.name}
        </Row>
      ))}
    </Wrapper>
  );
};

export default List;
