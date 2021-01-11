import { combineReducers } from 'redux';

import posts from './post';
import auth from './auth';
import profile from './profile';
import likes from './likes';
export default combineReducers({
  posts,
  auth,
  profile,
  likes,
});
