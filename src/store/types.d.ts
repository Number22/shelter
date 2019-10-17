import { RouterAction, UserAction } from './actions';

declare module 'typesafe-actions' {
  export type RootAction = RouterAction | UserAction;

  interface Types {
    RootAction: RootAction;
  }
}
