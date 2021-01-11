import { APIURLS } from '../helpers/url';
import { USER_PROFILE_FAIL, USER_PROFILE_SUCCESS } from './actiontype';

export function userprofilesuccess(user) {
  return {
    type: USER_PROFILE_SUCCESS,
    user,
  };
}

export function userprofilefail(error) {
  return {
    type: USER_PROFILE_FAIL,
    error,
  };
}

export function fetchuserprofile(userid) {
  return (dispatch) => {
    const url = APIURLS.fetchuser(userid);
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) dispatch(userprofilesuccess(data.data.user));
        else dispatch(userprofilefail(data.error));
      });
  };
}
