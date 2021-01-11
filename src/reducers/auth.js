import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  AUTHORIZE_USER,
  LOG_OUT,
  EDIT_SUCCESS_USER,
  FETCH_FRIENDS_SUCCESS,
} from '../actions/actiontype';

const inialstate = {
  user: {},
  isLoggedin: false,
  isLoggingin: false,
  error: null,
  userfriends: [],
};
export default function (state = inialstate, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingin: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingin: false,
        isLoggedin: true,
        user: action.data,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingin: false,
        error: action.data,
      };
    case AUTHORIZE_USER:
      return {
        ...state,
        isLoggingin: false,
        isLoggedin: true,
        user: action.data,
        error: null,
      };
    case LOG_OUT:
      return {
        ...state,
        isLoggedin: false,
        user: {},
      };
    case EDIT_SUCCESS_USER:
      return {
        ...state,
        user: action.data,
      };
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        userfriends: action.data,
      };
    default:
      return state;
  }
}
