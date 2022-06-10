const API_ROOT = 'https://codeial.codingninjas.com:8000/api/v2';
export const APIURLS = {
  login: () => `${API_ROOT}/users/login`,
  signup: () => `${API_ROOT}/users/signup`,

  fetchposts: (page = 1, limit = 5) =>
    `${API_ROOT}/posts?page=${page}&limit=${limit}`,
  edituser: () => `${API_ROOT}/users/edit`,
  fetchuser: (userId) => `${API_ROOT}/users/${userId}`,
  fetchfriends: () => `${API_ROOT}/friendship/fetch_user_friends`,
  createfriends: (userId) =>
    `${API_ROOT}/friendship/create_friendship?user_id=${userId}`,
  removefriend: (userId) =>
    `${API_ROOT}/friendship/remove_friendship?user_id=${userId}`,
  createpost: () => `${API_ROOT}/posts/create`,
  createcomment: () => `${API_ROOT}/comments`,
  toggleLike: (id) =>
    `${API_ROOT}/likes/toggle?likeable_id=${id}&likeable_type=Post`,
  getlikedata: (id) => `${API_ROOT}/likes?likeable_id=${id}&likeable_type=Post`,
  searchuser: (name) => `${API_ROOT}/users/search?text=${name}`,
};
