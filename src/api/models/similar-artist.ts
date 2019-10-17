import { IImageApi, Image } from './image';

export interface ISimilarArtistApi {
  name: string;
  url: string;
  image: IImageApi[];
}

export class SimialrArtist {
  public name: string;
  public url: string;
  public images: Image[];

  constructor(data: ISimilarArtistApi) {
    this.name = data.name;
    this.url = data.url;
    this.images = data.image.map(item => new Image(item));
  }
}
