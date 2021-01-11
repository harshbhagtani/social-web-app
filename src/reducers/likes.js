import { UPDATE_LIKES, UPDATE_POST } from '../actions/actiontype';

export default function likes(state = [], action) {
  switch (action.type) {
    case UPDATE_LIKES:
      return action.likes;

    default:
      return state;
  }
}
