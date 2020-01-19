export default class MusicProvider {
  public static createInstance() {
    if (!MusicProvider.instance) {
      MusicProvider.instance = new MusicProvider();
    }
    return MusicProvider.instance;
  }

  private static instance;

  public configure() {
    window.MusicKit.configure({
      app: {
        build: '2020.01.20',
        name: 'Explore music',
      },
      developerToken:
        'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjcyNlozSDlEODMifQ.eyJpYXQiOjE1Nzk0NTAxNzQsImV4cCI6MTU5NTAwMjE3NCwiaXNzIjoiSkZOVEhVRDRYMiJ9.6LB9BSt21oiKi-gjY4LDN-MZMY1Ps6FQZkhUBXGE7N2MBSKgzLfcpENTq0zRZ9UBdyTBr9ApfrYTuyqhhL0kOQ',
    });
  }

  public getMusicInstance() {
    return window.MusicKit.getInstance();
  }
}
