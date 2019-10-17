import { routerActions } from 'connected-react-router';
import { ActionType } from 'typesafe-actions';

import * as userActions from './user/user.action';

export type RouterAction = ActionType<typeof routerActions>;
export type UserAction = ActionType<typeof userActions>;
