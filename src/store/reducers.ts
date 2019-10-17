import { connectRouter, RouterAction, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers, Store } from 'redux';

import { UserAction } from './actions';
import { IUserState, userReducer } from './user/user.reducer';

export interface IRootStateType {
  router: RouterState;
  user: IUserState;
}

export type ActionType = UserAction | RouterAction;
export type ReduxStoreType = Store<IRootStateType, ActionType>;

export const rootReducer = (history: History) =>
  combineReducers<IRootStateType>({
    router: connectRouter(history),
    user: userReducer,
  });
