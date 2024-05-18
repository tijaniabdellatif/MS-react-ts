import { combineReducers } from 'redux';

import githubReducer from './githubUsers';
import searchfollowersReducer from './searchfollowers';

const reducers = combineReducers({
  githubusers: githubReducer,
  searchFollowers: searchfollowersReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
