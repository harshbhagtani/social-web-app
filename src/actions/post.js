import { APIURLS } from '../helpers/url';
import { UPDATE_POST } from './actiontype';
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
