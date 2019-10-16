export interface IImageApi {
  '#text': string;
  size: string;
}

export class Image {
  public url: string;
  public size: string;

  constructor(data: IImageApi) {
    this.size = data.size;
    this.url = data['#text'];
  }
}
