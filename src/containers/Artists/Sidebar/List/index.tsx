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
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 0.5480567226890756) 0%,
      rgba(9, 9, 121, 0.6012780112044818) 44%,
      rgba(0, 212, 255, 1) 100%
    );
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
