import { APIURLS } from '../helpers/url';
import { getformbody } from '../helpers/utils';
import { LOGIN_START } from './actiontype';

export function login_start() {
  return {
    type: LOGIN_START,
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
    });
  };
}
