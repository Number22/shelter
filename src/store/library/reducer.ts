import { createReducer } from 'typesafe-actions';
import {
  getAlbum,
  getAlbums,
  getArtist,
  getArtists,
  getMusicVideo,
  getMusicVideos,
  getPlaylist,
  getPlaylists,
  getSong,
  getSongs,
  search,
} from '.';

export interface ILibraryState {
  musicVideos: MusicKit.Resource[];
  artists: MusicKit.Resource[];
  songs: MusicKit.Resource[];
  albums: MusicKit.Resource[];
  playlists: MusicKit.Resource[];
  currentAlbum?: MusicKit.Resource;
  currentArtist?: MusicKit.Resource;
  currentSong?: MusicKit.Resource;
  currentPlaylist?: MusicKit.Resource;
  currentMusicVideo?: MusicKit.Resource;
  searchResult?: MusicKit.Resource;

  isLoadingArtists: boolean;
  isLoadingArtist: boolean;
  isLoadingAlbums: boolean;
  isLoadingAlbum: boolean;
  isLoadingTracks: boolean;
}

const initialState: ILibraryState = {
  albums: [],
  artists: [],
  musicVideos: [],
  songs: [],
  playlists: [],
  currentAlbum: undefined,
  currentArtist: undefined,
  currentSong: undefined,
  currentMusicVideo: undefined,
  currentPlaylist: undefined,
  searchResult: undefined,

  isLoadingAlbum: false,
  isLoadingArtist: false,
  isLoadingArtists: false,
  isLoadingAlbums: false,
  isLoadingTracks: false,
};

const albumReducer = createReducer<ILibraryState>(initialState)
  .handleAction(getAlbum.request, (state, action) => ({
    ...state,
    isLoadingAlbum: true,
    currentAlbum: undefined,
  }))
  .handleAction(getAlbum.success, (state, action) => ({
    ...state,
    isLoadingAlbum: false,
    currentAlbum: action.payload,
  }))
  .handleAction(getAlbum.failure, (state, action) => ({
    ...state,
    isLoadingAlbum: false,
  }));

const albumsReducer = createReducer<ILibraryState>(initialState)
  .handleAction(getAlbums.request, (state, action) => ({
    ...state,
    isLoadingAlbums: true,
    albums: [],
  }))
  .handleAction(getAlbums.success, (state, action) => ({
    ...state,
    isLoadingAlbums: false,
    albums: action.payload,
  }))
  .handleAction(getAlbums.failure, (state, action) => ({
    ...state,
    isLoadingAlbums: false,
  }));

const artistReducer = createReducer<ILibraryState>(initialState)
  .handleAction(getArtist.request, (state, action) => ({
    ...state,
    isLoadingArtist: true,
    currentArtist: undefined,
  }))
  .handleAction(getArtist.success, (state, action) => ({
    ...state,
    isLoadingArtist: false,
    currentArtist: action.payload,
  }))
  .handleAction(getArtist.failure, (state, action) => ({
    ...state,
    isLoadingArtist: false,
  }));

const artistsReducer = createReducer<ILibraryState>(initialState)
  .handleAction(getArtists.request, (state, action) => ({
    ...state,
    isLoadingArtists: true,
  }))
  .handleAction(getArtists.success, (state, action) => ({
    ...state,
    isLoadingArtists: false,
    artists: [...state.artists, ...action.payload],
  }))
  .handleAction(getArtists.failure, (state, action) => ({
    ...state,
    isLoadingArtists: false,
  }));

const songReducer = createReducer<ILibraryState>(initialState)
  .handleAction(getSong.request, (state, action) => ({
    ...state,
    currentSong: undefined,
  }))
  .handleAction(getSong.success, (state, action) => ({
    ...state,
    currentSong: action.payload,
  }))
  .handleAction(getSong.failure, (state, action) => ({
    ...state,
    isLoading: false,
  }));

const songsReducer = createReducer<ILibraryState>(initialState)
  .handleAction(getSongs.request, (state, action) => ({
    ...state,
    isLoadingSongs: true,
    songs: [],
  }))
  .handleAction(getSongs.success, (state, action) => ({
    ...state,
    isLoadingSongs: false,
    songs: action.payload,
  }))
  .handleAction(getSongs.failure, (state, action) => ({
    ...state,
    isLoadingSongs: false,
  }));

const playlistReducer = createReducer<ILibraryState>(initialState)
  .handleAction(getPlaylist.request, (state, action) => ({
    ...state,
    currentPlaylist: undefined,
  }))
  .handleAction(getPlaylist.success, (state, action) => ({
    ...state,
    currentPlaylist: action.payload,
  }))
  .handleAction(getPlaylist.failure, (state, action) => ({
    ...state,
  }));

const playlistsReducer = createReducer<ILibraryState>(initialState)
  .handleAction(getPlaylists.request, (state, action) => ({
    ...state,
    playlists: [],
  }))
  .handleAction(getPlaylists.success, (state, action) => ({
    ...state,
    playlists: action.payload,
  }))
  .handleAction(getPlaylists.failure, (state, action) => ({
    ...state,
    isLoading: false,
  }));

const musicVideoReducer = createReducer<ILibraryState>(initialState)
  .handleAction(getMusicVideo.request, (state, action) => ({
    ...state,
    currentMusicVideo: undefined,
  }))
  .handleAction(getMusicVideo.success, (state, action) => ({
    ...state,
    currentMusicVideo: action.payload,
  }))
  .handleAction(getMusicVideo.failure, (state, action) => ({
    ...state,
  }));

const musicVideosReducer = createReducer<ILibraryState>(initialState)
  .handleAction(getMusicVideos.request, (state, action) => ({
    ...state,
    musicVideos: [],
  }))
  .handleAction(getMusicVideos.success, (state, action) => ({
    ...state,
    musicVideos: action.payload,
  }))
  .handleAction(getMusicVideos.failure, (state, action) => ({
    ...state,
  }));

const searchReducer = createReducer<ILibraryState>(initialState)
  .handleAction(search.request, (state, action) => ({
    ...state,
    searchResult: undefined,
  }))
  .handleAction(search.success, (state, action) => ({
    ...state,
    searchResult: action.payload,
  }))
  .handleAction(search.failure, (state, action) => ({
    ...state,
  }));

export const libraryReducer = createReducer<ILibraryState>(initialState, {
  ...albumReducer.handlers,
  ...albumsReducer.handlers,
  ...artistReducer.handlers,
  ...artistsReducer.handlers,
  ...songReducer.handlers,
  ...songsReducer.handlers,
  ...playlistReducer.handlers,
  ...playlistsReducer.handlers,
  ...musicVideoReducer.handlers,
  ...musicVideosReducer.handlers,
  ...searchReducer.handlers,
});
