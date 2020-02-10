declare namespace MusicKit {
  interface MusicKitInstance {
    addEventListener(name: string, callback: (data: any) => any): void;
    removeEventListener(name: string, callback: (data: any) => any): void;
  }

  class Media extends MediaItem {
    container: any;
  }
}
