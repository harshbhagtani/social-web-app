export const APIURLS = {
  login: () => `http://codeial.com:8000/api/v2/users/login`,
  signup: () => `http://codeial.com:8000/api/v2/users/signup`,

  fetchposts: (page = 1, limit = 5) =>
    `http://codeial.com:8000/api/v2/posts?page=${page}&limit=${limit}`,
};
