import * as Future from 'fluture';
import axios from 'axios';

const authUsername = process.env.GITHUB_USERNAME;
const authPassword = process.env.GITHUB_PASSWORD;

const getCommonAxiosConfig = () => ({
  auth: {
    username: authUsername,
    password: authPassword,
  },
  validateStatus (status) {
    return status < 500;
  },
});

export const searchUsers = ({ query = '' }) => Future.tryP (
  () => axios.get (
    `https://api.github.com/search/users?q=${query}`,
    {
      ...getCommonAxiosConfig (),
    }
  )
);

export const searchRepos = ({ username = '' }) => Future.tryP (
  () => axios.get (
    `https://api.github.com/users/${username}/repos`,
    {
      ...getCommonAxiosConfig (),
    }
  )
);

export const getContributorsForRepo = ({ username = '', repo = '' }) => Future.tryP (
  () => axios.get (
    `https://api.github.com/repos/${username}/${repo}/contributors`,
    {
      ...getCommonAxiosConfig (),
    }
  )
);
