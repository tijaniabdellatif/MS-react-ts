import { ActionType } from 'redux/action-types';
import { Action } from 'redux/actions';
interface IGithubUsersState {
  loading: boolean;
  error: string | null;
  data: object[];
}

const reducer = (state: IGithubUsersState, action: Action): IGithubUsersState => {
  switch (action.type) {
    case ActionType.SEARCH_USERS:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_USERS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_USERS_ERROR:
      return { loading: true, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
