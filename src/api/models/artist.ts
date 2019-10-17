import { IImageApi, Image } from './image';
import { ISimilarArtistApi, SimialrArtist } from './similar-artist';
import { ITagApi } from './tag';
import { IWikiApi, Wiki } from './wiki';

export interface IArtistApi {
  ontour: boolean;
  name: string;
  mbid: string;
  streamable: boolean;
  url: string;
  tags: {
    tag: ITagApi[];
  };
  similar: {
    artist: ISimilarArtistApi[];
  };
  image: IImageApi[];
  playcount: number;
  stats: {
    listeners: number;
    playcount: number;
  };
  bio: IWikiApi;
  '@attr': {
    rank: string;
  };
}

export class Artist {
  public onTour: boolean;
  public name: string;
  public mbid: string;
  public streamable: boolean;
  public url: string;
  public tags: ITagApi[];
  public similar: SimialrArtist[];
  public images: Image[];
  public playCount: number;
  public stats: {
    listeners: number;
    playCount: number;
  };
  public bio: Wiki;
  public rank: string;

  constructor(data: IArtistApi) {
    this.onTour = data.ontour;
    this.name = data.name;
    this.mbid = data.mbid;
    this.streamable = data.streamable;
    this.url = data.url;
    this.tags = data.tags.tag;
    this.similar = data.similar.artist.map(item => new SimialrArtist(item));
    this.images = data.image.map(item => new Image(item));
    this.stats = {
      listeners: data.stats.listeners,
      playCount: data.stats.playcount,
    };
    this.bio = new Wiki(data.bio);
    this.rank = data['@attr'].rank;
  }
}
