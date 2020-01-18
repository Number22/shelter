export interface ISearchRequest {
  query: string;
  types: Array<'album' | 'artist' | 'playlist' | 'track'>;
  options?: SpotifyApi.SearchForItemParameterObject;
}
