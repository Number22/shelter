import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

import Loader from '@app/components/Loader';
import { getArtist, getArtists } from '@app/store/library';
import { IRootStateType } from '@app/store/reducers';

import Content from './Content';
import Sidebar from './Sidebar';

const LIMIT_SIZE = 100;

const Wrapper = styled.div`
  height: calc(100% - 56px);
  display: flex;
`;

const Artists: FC = ({}) => {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);
  const artists = useSelector((store: IRootStateType) => store.library.artists);
  const currentArtist = useSelector((store: IRootStateType) => store.library.currentArtist);
  const isLoadingArtist = useSelector((store: IRootStateType) => store.library.isLoadingArtist);
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
      {currentArtist ? <Content albums={artistAlbums} artistName={artistName} /> : <Loader />}
    </Wrapper>
  );
};

export default Artists;
