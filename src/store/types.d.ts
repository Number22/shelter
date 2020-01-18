import { RouterAction, SearchAction } from './actions';

declare module 'typesafe-actions' {
  export type RootAction = RouterAction | SearchAction;

  interface Types {
    RootAction: RootAction;
  }
}
