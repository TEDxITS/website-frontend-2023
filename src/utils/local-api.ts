import axios from 'axios';

export const localURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api'
    : `https://www.tedxits.org/api`;

// Local API
export const localApi = axios.create({
  baseURL: localURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});
