import { RouterAction, UserAction, ChartAction } from './actions';

declare module 'typesafe-actions' {
  export type RootAction = RouterAction | UserAction | ChartAction;

  interface Types {
    RootAction: RootAction;
  }
}
