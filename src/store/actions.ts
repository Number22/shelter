import { routerActions } from 'connected-react-router';
import { ActionType } from 'typesafe-actions';

import * as libraryActions from './library';

export type RouterAction = ActionType<typeof routerActions>;
export type LibraryAction = ActionType<typeof libraryActions>;
