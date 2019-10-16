export interface IAlbumTrackApi {
  '@attr': {
    rank: number;
  };
  artist: {
    mbid: string;
    name: string;
    url: string;
  };
  duration: number;
  name: string;
  streamble: {
    '#text': string;
    fulltrack: number;
  };
  url: string;
}

export class AlbumTrack {
  public rank: number;
  public artist: {
    mbid: string;
    name: string;
    url: string;
  };
  public duration: number;
  public name: string;
  public streamble: string;
  public fullTrack: number;
  public url: string;

  constructor(data: IAlbumTrackApi) {
    this.rank = data['@attr'].rank;
    this.artist = data.artist;
    this.duration = data.duration;
    this.name = data.name;
    this.streamble = data.streamble['#text'];
    this.fullTrack = data.streamble.fulltrack;
    this.url = data.url;
  }
}
