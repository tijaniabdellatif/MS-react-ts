import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from 'services/action-types';
import { Action } from 'services/actions';

export interface IPayload {
  login?:string,
  fullname?: string;
  image?: string;
  company?: string;
  bio?: string;
  public_repos?: number;
  followers?: number;
  location?: string;
  following?: number;
  public_gists?: number;
  url?: string;
  blog?: string;
  twitter?: string;
  followers_url?: string;
}

export interface IFollowerPayload {
  avatar: string;
  url: string;
  username: string;
}

export const searchFollowers = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_FOLLOWERS,
    });

    try {
      const { data } = await axios.get(`https://api.github.com/users/${term}/followers`);
      dispatch({
        type: ActionType.SEARCH_FOLLOWERS_SUCESS,
        payload: data,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.SEARCH_FOLLOWERS_ERROR,
          payload: err.message,
        });
      }
    }
  };
};

export const searchGithubUsers = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_USERS,
    });

    try {
      const { data } = await axios.get(`https://api.github.com/users/${term}`);

      const iPayload: IPayload = {
        login:data.login,
        fullname: data.name,
        image: data.avatar_url,
        company: data.company,
        bio: data.bio,
        public_repos: data.public_repos,
        followers: data.followers,
        location: data.location,
        public_gists: data.public_gists,
        following: data.following,
        url: data.html_url,
        blog: data.blog,
        twitter: data.twitter_username,
        followers_url: data.followers_url,
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
