import axios from 'axios';

import { getToken } from '@/utils/token';

const isServer = () => {
  return typeof window === 'undefined';
};

export const baseURL = 'https://tedxits2023-server.azurewebsites.net/api';

export const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

api.interceptors.request.use((config) => {
  if (!isServer() && config.headers) {
    const token = getToken();
    config.headers.Authorization = token ? `Bearer ${token}` : '';
  }

  return config;
});

export default api;
