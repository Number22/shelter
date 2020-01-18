import { connectRouter, RouterAction, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers, Store } from 'redux';

import { ISearchState, searchReducer } from './search/search.reducer';

export interface IRootStateType {
  router: RouterState;
  search: ISearchState;
}

export type ActionType = RouterAction;
export type ReduxStoreType = Store<IRootStateType, ActionType>;

export const rootReducer = (history: History) =>
  combineReducers<IRootStateType>({
    router: connectRouter(history),
    search: searchReducer,
  });
