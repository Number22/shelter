export interface IWikiApi {
  content: string;
  publicshed: string;
  summary: string;
  links: {
    link: {
      '#text': string;
      href: string;
      rel: string;
    };
  };
}

export class Wiki {
  public content: string;
  public publicshed: string;
  public summary: string;
  public link: {
    text: string;
    href: string;
    rel: string;
  };

  constructor(data: IWikiApi) {
    this.content = data.content;
    this.publicshed = data.publicshed;
    this.summary = data.summary;

    if (data.links) {
      this.link = { ...data.links.link, text: data.links.link['#text'] };
    }
  }
}
