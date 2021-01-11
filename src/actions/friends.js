import { APIURLS } from '../helpers/url';
import { FETCH_FRIENDS_SUCCESS } from './actiontype';
export function fetchuserfriends() {
  return (dispatch) => {
    const url = APIURLS.fetchfriends();
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(fetchuserfriendssuccess(data.data.friends));
        }
      });
  };
}
export function fetchuserfriendssuccess(data) {
  return {
    type: FETCH_FRIENDS_SUCCESS,
    data,
  };
}
export function adduserasfriend(userid) {
  return (dispatch) => {
    const url = APIURLS.createfriends(userid);
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data);
        }
      });
  };
}
export function removeuserasfriend(userid) {
  return (dispatch) => {
    const url = APIURLS.removefriend(userid);
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data);
        }
      });
  };
}
