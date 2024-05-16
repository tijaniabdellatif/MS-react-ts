
enum ActionType {

    SEARCH_USERS = 'search_users',
    SEARCH_USERS_SUCCESS="search_users_success",
    SEARCH_USERS_ERROR = "search_users_error"
}

interface IGithubUsersState {
  loading: boolean;
  error: string | null;
  data: string[];
}

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

type Action = ISearchAction | ISearchUsersSuccessAction | ISearchUsersErrorAction;
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
