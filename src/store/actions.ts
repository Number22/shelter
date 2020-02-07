import { routerActions } from 'connected-react-router';
import { ActionType } from 'typesafe-actions';

import * as libraryActions from './library';
import * as playerActions from './player';

export type RouterAction = ActionType<typeof routerActions>;
export type LibraryAction = ActionType<typeof libraryActions>;
export type PlayerAction = ActionType<typeof playerActions>;
