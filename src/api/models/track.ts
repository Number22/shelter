import { IImageApi, Image } from './image';
import { ITagApi } from './tag';
import { IWikiApi, Wiki } from './wiki';

export interface ITrackApi {
  duration: number;
  listeners: number;
  mbid: string;
  name: string;
  playcount: number;
  url: string;
  toptags: {
    tag: ITagApi[];
  };
  wiki: IWikiApi;
  streamable: {
    '#text': string;
    fulltrack: number;
  };
  artist: {
    mbid: string;
    name: string;
    url: string;
  };
  album: {
    '@attr': {
      position: number;
    };
    artist: string;
    image: IImageApi[];
    mbid: string;
    title: string;
    url: string;
  };
}

export class Track {
  public duration: number;
  public listeners: number;
  public mbid: string;
  public name: string;
  public playCount: number;
  public url: string;
  public topTags: ITagApi[];
  public wiki: Wiki;
  public streamable: string;
  public fullTrack: number;
  public artist: {
    mbid: string;
    name: string;
    url: string;
  };
  public album: {
    position: number;
    artist: string;
    images: Image[];
    mbid: string;
    title: string;
    url: string;
  };

  constructor(data: ITrackApi) {
    this.duration = data.duration;
    this.listeners = data.listeners;
    this.mbid = data.mbid;
    this.name = data.name;
    this.playCount = data.playcount;
    this.url = data.url;
    this.streamable = data.streamable['#text'];
    this.fullTrack = data.streamable.fulltrack;
    this.artist = data.artist;

    if (data.toptags) {
      this.topTags = data.toptags.tag;
    }

    if (data.wiki) {
      this.wiki = new Wiki(data.wiki);
    }

    if (data.album) {
      this.album = {
        artist: data.album.artist,
        images: data.album.image.map(item => new Image(item)),
        mbid: data.album.mbid,
        position: data.album['@attr'].position,
        title: data.album.title,
        url: data.album.url,
      };
    }
  }
}
