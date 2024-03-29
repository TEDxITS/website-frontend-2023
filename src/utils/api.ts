import axios from 'axios';

import {
  getAdminRefreshToken,
  getAdminToken,
  getRefreshToken,
  getToken,
  setAdminRefreshToken,
  setAdminToken,
  setRefreshToken,
  setToken,
} from '@/utils/token';

const isServer = () => {
  return typeof window === 'undefined';
};

export const baseURL = 'https://tedxits2023-server.azurewebsites.net/api';
// export const baseURL = 'https://0775-140-213-165-9.ngrok-free.app/api';

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
      response.data.message === 'Invalid token' &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const refreshToken = getRefreshToken();
        const newAccessTokenResponse = await axios.get(
          `${baseURL}/auth/refresh-token`,
          {
            headers: {
              Authorization: refreshToken ? `Bearer ${refreshToken}` : '',
            },
          }
        );

        if (!newAccessTokenResponse.data.data) {
          return Promise.reject(error);
        }

        const newAccessToken = newAccessTokenResponse.data.data.accessToken;
        const newRefreshToken = newAccessTokenResponse.data.data.refreshToken;
        setToken(newAccessToken);
        setRefreshToken(newRefreshToken);

        // Update the original request with the new access token
        originalRequest.headers.Authorization = newAccessToken
          ? `Bearer ${newAccessToken}`
          : '';

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
      response.data.message === 'Invalid token' &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const refreshToken = getAdminRefreshToken();
        const newAccessTokenResponse = await axios.get(
          `${baseURL}/auth/admin-refresh-token`,
          {
            headers: {
              Authorization: refreshToken ? `Bearer ${refreshToken}` : '',
            },
          }
        );

        if (!newAccessTokenResponse.data.data) {
          return Promise.reject(error);
        }

        const newAccessToken = newAccessTokenResponse.data.data.accessToken;
        const newRefreshToken = newAccessTokenResponse.data.data.refreshToken;
        setAdminToken(newAccessToken);
        setAdminRefreshToken(newRefreshToken);

        // Update the original request with the new access token
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        // Resend the original request
        return adminApi(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
