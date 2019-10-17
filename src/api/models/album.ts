import { AlbumTrack, IAlbumTrackApi } from './';
import { IImageApi, Image } from './image';
import { ITagApi } from './tag';
import { IWikiApi, Wiki } from './wiki';

export interface IAlbumApi {
  artist: {
    name: string;
  };
  image: IImageApi[];
  listeners: number;
  mbid: string;
  name: string;
  playcount: number;
  tags: ITagApi[];
  url: string;
  wiki: IWikiApi;
  tracks: {
    track: IAlbumTrackApi[];
  };
  '@attr': {
    rank: string;
  };
}

export class Album {
  public artist: string;
  public image: Image[];
  public listeners: number;
  public mbid: string;
  public name: string;
  public playcount: number;
  public tags: ITagApi[];
  public url: string;
  public wiki: Wiki;
  public tracks: AlbumTrack[];
  public rank: string;

  constructor(data: IAlbumApi) {
    this.artist = data.artist.name;
    this.image = data.image.map(item => new Image(item));
    this.listeners = data.listeners;
    this.mbid = data.mbid;
    this.name = data.name;
    this.playcount = data.playcount;
    this.tags = data.tags;
    this.url = data.url;
    this.rank = data['@attr'].rank;

    if (data.wiki) {
      this.wiki = new Wiki(data.wiki);
    }

    if (data.tracks) {
      this.tracks = data.tracks.track.map(item => new AlbumTrack(item));
    }
  }
}
