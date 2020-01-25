import { routerActions } from 'connected-react-router';
import { ActionType } from 'typesafe-actions';

import * as libraryActions from './library/library.action';

export type RouterAction = ActionType<typeof routerActions>;
export type LibraryAction = ActionType<typeof libraryActions>;
