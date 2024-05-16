import { ActionType } from 'services/action-types';
import { Action } from 'services/actions';

interface IGithubUsersState {
  loading: boolean;
  error: string | null;
  data: object[];
}

const intialeState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (state: IGithubUsersState = intialeState, action: Action): IGithubUsersState => {
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
