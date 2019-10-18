import { routerActions } from 'connected-react-router';
import { ActionType } from 'typesafe-actions';

import * as chartActions from './chart/chart.action';
import * as userActions from './user/user.action';

export type RouterAction = ActionType<typeof routerActions>;
export type UserAction = ActionType<typeof userActions>;
export type ChartAction = ActionType<typeof chartActions>;
