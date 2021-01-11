import { APIURLS } from '../helpers/url';
import { getformbody } from '../helpers/utils';
import {
  AUTHORIZE_USER,
  EDIT_FAILED_USER,
  EDIT_SUCCESS_USER,
  LOGIN_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOG_OUT,
} from './actiontype';

export function login_start() {
  return {
    type: LOGIN_START,
  };
}

export function login_success(data) {
  return {
    type: LOGIN_SUCCESS,
    data,
  };
}
export function login_failed(data) {
  return {
    type: LOGIN_FAILURE,
    data,
  };
}
export function login(email, password) {
  return (dispatch) => {
    const url = APIURLS.login();

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getformbody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          localStorage.setItem('token', data.data.token);
          dispatch(login_success(data.data.user));
        } else {
          dispatch(login_failed(data.message));
        }
      });
  };
}

export function signup(email, password, name, confirm_password) {
  return (dispatch) => {
    const url = APIURLS.signup();

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getformbody({ email, password, name, confirm_password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem('token', data.data.token);
      });
  };
}

export function authorizeuser(data) {
  return {
    type: AUTHORIZE_USER,
    data,
  };
}

export function logOut() {
  return {
    type: LOG_OUT,
  };
}

export function editsuccess(user) {
  return {
    type: EDIT_SUCCESS_USER,
    data: user,
  };
}
export function editfailed(error) {
  return {
    type: EDIT_FAILED_USER,
    error,
  };
}
export function edituser(name, password, confirm_password, id) {
  return (dispatch) => {
    const url = APIURLS.edituser();

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: getformbody({ id, password, name, confirm_password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          dispatch(editsuccess(data.data.user));
          localStorage.setItem('token', data.data.token);
        } else {
          dispatch(editfailed(data.message));
        }
      });
  };
}
