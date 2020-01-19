import { build, developerToken, projectName } from '../constants/music-kit';

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
        build,
        name: projectName,
      },
      developerToken,
    });
  }

  public getMusicInstance() {
    return window.MusicKit.getInstance();
  }
}
