import { routerActions } from 'connected-react-router';
import { ActionType } from 'typesafe-actions';

import * as searchActions from './search/search.action';

export type RouterAction = ActionType<typeof routerActions>;
export type SearchAction = ActionType<typeof searchActions>;
