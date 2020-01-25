import { RouterAction, LibraryAction } from './actions';

declare module 'typesafe-actions' {
  export type RootAction = RouterAction | LibraryAction;

  interface Types {
    RootAction: RootAction;
  }
}
