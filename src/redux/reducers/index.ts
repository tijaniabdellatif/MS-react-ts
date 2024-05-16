import { combineReducers } from 'redux';
import githubReducer from './githubUsers';

const reducers = combineReducers({
  githubusers: githubReducer,
});

export default reducers;