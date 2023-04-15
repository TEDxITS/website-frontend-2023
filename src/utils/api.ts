import axios from 'axios';

import {
  getAdminRefreshToken,
  getAdminToken,
  getRefreshToken,
  getToken,
} from '@/utils/token';

const isServer = () => {
  return typeof window === 'undefined';
};

export const baseURL = 'https://tedxits2023-server.azurewebsites.net/api';

// Regular API
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

api.interceptors.response.use(
  async (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const response = error.response;

    if (
      response &&
      response.status === 401 &&
      response.data.message === 'Invalid Token' &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const refreshToken = getRefreshToken();
        const newAccessTokenResponse = await axios.get('/refresh-token', {
          headers: {
            Authorization: refreshToken ? `Bearer ${refreshToken}` : '',
          },
        });

        const newAccessToken = newAccessTokenResponse.data.accessToken;

        // Update the original request with the new access token
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        // Resend the original request
        return api(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

// Admin API
export const adminApi = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

adminApi.interceptors.request.use((config) => {
  if (!isServer() && config.headers) {
    const token = getAdminToken();
    config.headers.Authorization = token ? `Bearer ${token}` : '';
  }
  return config;
});

adminApi.interceptors.response.use(
  async (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const response = error.response;

    if (
      response &&
      response.status === 401 &&
      response.data.message === 'Invalid Token' &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const refreshToken = getAdminRefreshToken();
        const newAccessTokenResponse = await axios.get('/admin-refresh-token', {
          headers: {
            Authorization: refreshToken ? `Bearer ${refreshToken}` : '',
          },
        });

        const newAccessToken = newAccessTokenResponse.data.accessToken;

        // Update the original request with the new access token
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        // Resend the original request
        return api(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
