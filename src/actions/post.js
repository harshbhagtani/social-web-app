import { UPDATE_POST } from './actiontype';
export function fetchpost() {
  return (dispatch) => {
    const url = 'http://codeial.com:8000/api/v2/posts?page=1&limit=5';
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
