import { createAsyncAction } from 'typesafe-actions';

export const getAlbum = createAsyncAction(
  '@library/GET_ALBUM',
  '@library/GET_ALBUM_SUCCESS',
  '@library/GET_ALBUM_FAILURE',
)<{ id: string; parameters?: MusicKit.QueryParameters }, MusicKit.Resource, Error>();

export const getAlbums = createAsyncAction(
  '@library/GET_ALBUMS',
  '@library/GET_ALBUMS_SUCCESS',
  '@library/GET_ALBUMS_FAILURE',
)<{ ids: string[]; parameters?: MusicKit.QueryParameters }, MusicKit.Resource[], Error>();

export const getArtist = createAsyncAction(
  '@library/GET_ARTIST',
  '@library/GET_ARTIST_SUCCESS',
  '@library/GET_ARTIST_FAILURE',
)<{ id: string; parameters?: MusicKit.QueryParameters }, MusicKit.Resource, Error>();

export const getArtists = createAsyncAction(
  '@library/GET_ARTISTS',
  '@library/GET_ARTISTS_SUCCESS',
  '@library/GET_ARTISTS_FAILURE',
)<{ ids: string[]; parameters?: MusicKit.QueryParameters }, MusicKit.Resource[], Error>();

export const getMusicVideo = createAsyncAction(
  '@library/GET_MUSIC_VIDEO',
  '@library/GET_MUSIC_VIDEO_SUCCESS',
  '@library/GET_MUSIC_VIDEO_FAILURE',
)<{ id: string; parameters?: MusicKit.QueryParameters }, MusicKit.Resource, Error>();

export const getMusicVideos = createAsyncAction(
  '@library/GET_MUSIC_VIDEOS',
  '@library/GET_MUSIC_VIDEOS_SUCCESS',
  '@library/GET_MUSIC_VIDEOS_FAILURE',
)<{ ids: string[]; parameters?: MusicKit.QueryParameters }, MusicKit.Resource[], Error>();

export const getPlaylist = createAsyncAction(
  '@library/GET_PLAYLIST',
  '@library/GET_PLAYLIST_SUCCESS',
  '@library/GET_PLAYLIST_FAILURE',
)<{ id: string; parameters?: MusicKit.QueryParameters }, MusicKit.Resource, Error>();

export const getPlaylists = createAsyncAction(
  '@library/GET_PLAYLISTS',
  '@library/GET_PLAYLISTS_SUCCESS',
  '@library/GET_PLAYLISTS_FAILURE',
)<{ ids: string[]; parameters?: MusicKit.QueryParameters }, MusicKit.Resource[], Error>();

export const getSong = createAsyncAction('@library/GET_SONG', '@library/GET_SONG_SUCCESS', '@library/GET_SONG_FAILURE')<
  { id: string; parameters?: MusicKit.QueryParameters },
  MusicKit.Resource,
  Error
>();

export const getSongs = createAsyncAction(
  '@library/GET_SONGS',
  '@library/GET_SONGS_SUCCESS',
  '@library/GET_SONGS_FAILURE',
)<{ ids: string[]; parameters?: MusicKit.QueryParameters }, MusicKit.Resource[], Error>();

export const search = createAsyncAction('@library/SEARCH', '@library/SEARCH_SUCCESS', '@library/SEARCH_FAILURE')<
  { term: string; parameters?: MusicKit.QueryParameters },
  MusicKit.Resource,
  Error
>();
