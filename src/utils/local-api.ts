import axios from 'axios';

export const localURL = 'http://localhost:3000/api';

// Local API
export const localApi = axios.create({
  baseURL: localURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});
