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
    const link = data.links.link;

    this.content = data.content;
    this.publicshed = data.publicshed;
    this.summary = data.summary;
    this.link = { ...link, text: link['#text'] };
  }
}
