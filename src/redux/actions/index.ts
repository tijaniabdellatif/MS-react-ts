import { ActionType } from 'redux/action-types';

interface ISearchAction {
  type: ActionType.SEARCH_USERS;
}

interface ISearchUsersSuccessAction {
  type: ActionType.SEARCH_USERS_SUCCESS;
  payload: string[];
}

interface ISearchUsersErrorAction {
  type: ActionType.SEARCH_USERS_ERROR;
  payload: string;
}

export type Action = ISearchAction | ISearchUsersSuccessAction | ISearchUsersErrorAction;
