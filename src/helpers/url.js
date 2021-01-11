export const APIURLS = {
  login: () => `http://codeial.com:8000/api/v2/users/login`,
  signup: () => `http://codeial.com:8000/api/v2/users/signup`,

  fetchposts: (page = 1, limit = 5) =>
    `http://codeial.com:8000/api/v2/posts?page=${page}&limit=${limit}`,
  edituser: () => `http://codeial.com:8000/api/v2/users/edit`,
  fetchuser: (userId) => `http://codeial.com:8000/api/v2/users/${userId}`,
  fetchfriends: () =>
    `http://codeial.com:8000/api/v2/friendship/fetch_user_friends`,
  createfriends: (userId) =>
    `http://codeial.com:8000/api/v2/friendship/create_friendship?user_id=${userId}`,
  removefriend: (userId) =>
    `http://codeial.com:8000/api/v2/friendship/remove_friendship?user_id=${userId}`,
  createpost: () => `http://codeial.com:8000/api/v2/posts/create`,
  createcomment: () => `http://codeial.com:8000/api/v2/comments`,
  toggleLike: (id) =>
    `http://codeial.com:8000/api/v2/likes/toggle?likeable_id=${id}&likeable_type=Post`,
  getlikedata: (id) =>
    `http://codeial.com:8000/api/v2/likes?likeable_id=${id}&likeable_type=Post`,
};
