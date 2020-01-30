import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { getArtists } from '@app/store/library';
import { IRootStateType } from '@app/store/reducers';

const Wrapper = styled.div``;

interface IArtistsProps {}

const Artists: FC<IArtistsProps> = ({}) => {
  const dispatch = useDispatch();
  const artists = useSelector((store: IRootStateType) => store.library.artists);

  console.log(artists);

  useEffect(() => {
    dispatch(getArtists.request({ ids: null }));
  }, []);

  return <Wrapper />;
};

export default Artists;
