import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from 'services/action-types';
import { Action } from 'services/actions';

interface IPayload {
  fullname: string;
  image: string;
  company: string;
  bio: string;
}

export const searchGithubUsers = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_USERS,
    });

    try {
      const { data } = await axios.get(`https://api.github.com/users/${term}`);

      const iPayload: IPayload = {
        fullname: data.name,
        image: data.avatar_url,
        company: data.company,
        bio: data.bio,
      };

      dispatch({
        type: ActionType.SEARCH_USERS_SUCCESS,
        payload: [iPayload],
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.SEARCH_USERS_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
