import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { getArtists, getArtist } from '@app/store/library';
import { IRootStateType } from '@app/store/reducers';

import Sidebar from './Sidebar';
import Content from './Content';

const LIMIT_SIZE = 100;

const Wrapper = styled.div`
  height: calc(100% - 100px);
  display: flex;
`;

interface IArtistsProps {}

const Artists: FC<IArtistsProps> = ({}) => {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);
  const artists = useSelector((store: IRootStateType) => store.library.artists);
  const currentArtist = useSelector((store: IRootStateType) => store.library.currentArtist);
  const artistAlbums = currentArtist ? currentArtist.albums : [];
  const artistName = currentArtist && currentArtist.attributes.name;

  const onLoadHandler = () => {
    dispatch(getArtists.request({ ids: null, parameters: { limit: 100, offset } }));
    setOffset(offset + LIMIT_SIZE);
  };

  const onSelectHandler = (id: string) => {
    dispatch(getArtist.request({ id, parameters: { include: ['albums'] } }));
  };

  return (
    <Wrapper>
      <Sidebar artists={artists} onLoad={onLoadHandler} onSelect={onSelectHandler} />
      <Content albums={artistAlbums} artistName={artistName} />
    </Wrapper>
  );
};

export default Artists;
