import { RouterAction, LibraryAction, PlayerAction } from './actions';

declare module 'typesafe-actions' {
  export type RootAction = RouterAction | LibraryAction | PlayerAction;

  interface Types {
    RootAction: RootAction;
  }
}
