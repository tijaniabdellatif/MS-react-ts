/**
 *  case ActionType.SEARCH_FOLLOWERS:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_FOLLOWERS_SUCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_FOLLOWERS_ERROR:
      return { loading: true, error: action.payload, data: [] };
 */
      import { ActionType } from 'services/action-types';
      import { Action } from 'services/actions';
      
      export interface IFollowers {
        loading: boolean;
        error: string | null;
        data: object[];
      }
      const intialeState = {
        loading: false,
        error: null,
        data: [],
      };
const reducer = (state: IFollowers = intialeState, action: Action): IFollowers => {
        switch (action.type) {
            case ActionType.SEARCH_FOLLOWERS:
                return { loading: true, error: null, data: [] };
              case ActionType.SEARCH_FOLLOWERS_SUCESS:
                return { loading: false, error: null, data: action.payload };
              case ActionType.SEARCH_FOLLOWERS_ERROR:
                return { loading: true, error: action.payload, data: [] };
      
          default:
            return state;
        }
      };
      
export default reducer;
export {};
      