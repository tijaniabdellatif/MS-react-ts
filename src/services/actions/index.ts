import { ActionType } from 'services/action-types';

interface ISearchAction {
  type: ActionType.SEARCH_USERS;
}

interface ISearchUsersSuccessAction {
  type: ActionType.SEARCH_USERS_SUCCESS;
  payload: object[];
}

interface ISearchUsersErrorAction {
  type: ActionType.SEARCH_USERS_ERROR;
  payload: string;
}

export type Action = ISearchAction | ISearchUsersSuccessAction | ISearchUsersErrorAction;
