import { APIURLS } from '../helpers/url';
import { getformbody } from '../helpers/utils';
import { UPDATE_LIKES, UPDATE_POST } from './actiontype';
export function fetchpost() {
  return (dispatch) => {
    const url = APIURLS.fetchposts();
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(updateposts(data.data.posts));
      });
  };
}
export function updateposts(posts) {
  return {
    type: UPDATE_POST,
    posts: posts,
  };
}
export function createPost(content) {
  return (dispatch) => {
    const url = APIURLS.createpost();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: getformbody({ content }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(fetchpost());
      });
  };
}
export function createComment(content, post_id) {
  return (dispatch) => {
    const url = APIURLS.createcomment();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: getformbody({ content, post_id }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(fetchpost());
      });
  };
}

export function togglelike(id) {
  return (dispatch) => {
    const url = APIURLS.toggleLike(id);
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
          dispatch(fetchpost());
        }
      });
  };
}

export function addLikeToStore(postId) {
  return (dispatch) => {
    const url = APIURLS.getlikedata(postId);
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
          dispatch(storelikesdata(data.data));
        }
      });
  };
}

export function storelikesdata(likes) {
  return {
    type: UPDATE_LIKES,
    likes,
  };
}
