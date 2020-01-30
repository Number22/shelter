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
  isLoading: boolean;
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
  isLoading: false,
};

const albumReducer = createReducer<ILibraryState>(initialState)
  .handleAction(getAlbum.request, (state, action) => ({
    ...state,
    isLoading: true,
    currentAlbum: undefined,
  }))
  .handleAction(getAlbum.success, (state, action) => ({
    ...state,
    isLoading: false,
    currentAlbum: action.payload,
  }))
  .handleAction(getAlbum.failure, (state, action) => ({
    ...state,
    isLoading: false,
  }));

const albumsReducer = createReducer<ILibraryState>(initialState)
  .handleAction(getAlbums.request, (state, action) => ({
    ...state,
    isLoading: true,
    albums: [],
  }))
  .handleAction(getAlbums.success, (state, action) => ({
    ...state,
    isLoading: false,
    albums: action.payload,
  }))
  .handleAction(getAlbums.failure, (state, action) => ({
    ...state,
    isLoading: false,
  }));

const artistReducer = createReducer<ILibraryState>(initialState)
  .handleAction(getArtist.request, (state, action) => ({
    ...state,
    isLoading: true,
    currentArtist: undefined,
  }))
  .handleAction(getArtist.success, (state, action) => ({
    ...state,
    isLoading: false,
    currentArtist: action.payload,
  }))
  .handleAction(getArtist.failure, (state, action) => ({
    ...state,
    isLoading: false,
  }));

const artistsReducer = createReducer<ILibraryState>(initialState)
  .handleAction(getArtists.request, (state, action) => ({
    ...state,
    isLoading: true,
    artists: [],
  }))
  .handleAction(getArtists.success, (state, action) => ({
    ...state,
    isLoading: false,
    artists: action.payload,
  }))
  .handleAction(getArtists.failure, (state, action) => ({
    ...state,
    isLoading: false,
  }));

const songReducer = createReducer<ILibraryState>(initialState)
  .handleAction(getSong.request, (state, action) => ({
    ...state,
    isLoading: true,
    currentSong: undefined,
  }))
  .handleAction(getSong.success, (state, action) => ({
    ...state,
    isLoading: false,
    currentSong: action.payload,
  }))
  .handleAction(getSong.failure, (state, action) => ({
    ...state,
    isLoading: false,
  }));

const songsReducer = createReducer<ILibraryState>(initialState)
  .handleAction(getSongs.request, (state, action) => ({
    ...state,
    isLoading: true,
    songs: [],
  }))
  .handleAction(getSongs.success, (state, action) => ({
    ...state,
    isLoading: false,
    songs: action.payload,
  }))
  .handleAction(getSongs.failure, (state, action) => ({
    ...state,
    isLoading: false,
  }));

const playlistReducer = createReducer<ILibraryState>(initialState)
  .handleAction(getPlaylist.request, (state, action) => ({
    ...state,
    isLoading: true,
    currentPlaylist: undefined,
  }))
  .handleAction(getPlaylist.success, (state, action) => ({
    ...state,
    isLoading: false,
    currentPlaylist: action.payload,
  }))
  .handleAction(getPlaylist.failure, (state, action) => ({
    ...state,
    isLoading: false,
  }));

const playlistsReducer = createReducer<ILibraryState>(initialState)
  .handleAction(getPlaylists.request, (state, action) => ({
    ...state,
    isLoading: true,
    playlists: [],
  }))
  .handleAction(getPlaylists.success, (state, action) => ({
    ...state,
    isLoading: false,
    playlists: action.payload,
  }))
  .handleAction(getPlaylists.failure, (state, action) => ({
    ...state,
    isLoading: false,
  }));

const musicVideoReducer = createReducer<ILibraryState>(initialState)
  .handleAction(getMusicVideo.request, (state, action) => ({
    ...state,
    isLoading: true,
    currentMusicVideo: undefined,
  }))
  .handleAction(getMusicVideo.success, (state, action) => ({
    ...state,
    isLoading: false,
    currentMusicVideo: action.payload,
  }))
  .handleAction(getMusicVideo.failure, (state, action) => ({
    ...state,
    isLoading: false,
  }));

const musicVideosReducer = createReducer<ILibraryState>(initialState)
  .handleAction(getMusicVideos.request, (state, action) => ({
    ...state,
    isLoading: true,
    musicVideos: [],
  }))
  .handleAction(getMusicVideos.success, (state, action) => ({
    ...state,
    isLoading: false,
    musicVideos: action.payload,
  }))
  .handleAction(getMusicVideos.failure, (state, action) => ({
    ...state,
    isLoading: false,
  }));

const searchReducer = createReducer<ILibraryState>(initialState)
  .handleAction(search.request, (state, action) => ({
    ...state,
    isLoading: true,
    searchResult: undefined,
  }))
  .handleAction(search.success, (state, action) => ({
    ...state,
    isLoading: false,
    searchResult: action.payload,
  }))
  .handleAction(search.failure, (state, action) => ({
    ...state,
    isLoading: false,
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
