import { createReducer } from 'typesafe-actions';

import { searchAction } from './search.action';

export interface ISearchState {
  result: {};
}

const initialState: ISearchState = {
  result: {},
};

export const searchReducer = createReducer<ISearchState>(initialState)
  .handleAction(searchAction.request, (state, action) => ({
    ...state,
    result: {},
  }))
  .handleAction(searchAction.success, (state, action) => ({
    ...state,
    result: action.payload,
  }))
  .handleAction(searchAction.failure, (state, action) => ({
    ...state,
    result: action.payload,
  }));
