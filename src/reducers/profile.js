import { USER_PROFILE_FAIL, USER_PROFILE_SUCCESS } from '../actions/actiontype';

const inialstate = {
  user: {},

  error: null,
};

export default function profile(state = inialstate, action) {
  switch (action.type) {
    case USER_PROFILE_FAIL:
      return {
        ...state,
        error: action.error,
      };
    case USER_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
}
