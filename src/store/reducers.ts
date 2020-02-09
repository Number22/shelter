import { connectRouter, RouterAction, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers, Store } from 'redux';

import { ILibraryState, libraryReducer } from './library/reducer';
import { IPlayerState, playerReducer } from './player/reducer';

export interface IRootStateType {
  router: RouterState;
  library: ILibraryState;
  player: IPlayerState;
}

export type ActionType = RouterAction;
export type ReduxStoreType = Store<IRootStateType, ActionType>;

export const rootReducer = (history: History) =>
  combineReducers<IRootStateType>({
    router: connectRouter(history),
    library: libraryReducer,
    player: playerReducer,
  });
