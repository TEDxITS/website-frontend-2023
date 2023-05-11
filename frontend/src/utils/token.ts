import Cookies from 'js-cookie';

export const getFirebaseIdToken = (): string => {
  return Cookies.get('tedxits2023-firebase') || '';
};

export const removeFirebaseIdToken = () => {
  Cookies.remove('tedxits2023-firebase');
};

export const setFirebaseIdToken = (token: string) => {
  Cookies.set('tedxits2023-firebase', token);
};

export const getToken = (): string => {
  return Cookies.get('tedxits2023-token') || '';
};

export const removeToken = () => {
  Cookies.remove('tedxits2023-token');
};

export const setToken = (token: string) => {
  Cookies.set('tedxits2023-token', token);
};

export const getAdminToken = (): string => {
  return Cookies.get('tedxits2023-admin-token') || '';
};

export const removeAdminToken = () => {
  return Cookies.remove('tedxits2023-admin-token');
};

export const setAdminToken = (token: string) => {
  Cookies.set('tedxits2023-admin-token', token);
};

export const setRefreshToken = (token: string) => {
  Cookies.set('tedxits2023-refresh-token', token);
};

export const setAdminRefreshToken = (token: string) => {
  Cookies.set('tedxits2023-admin-refresh-token', token);
};

export const getRefreshToken = (): string => {
  return Cookies.get('tedxits2023-refresh-token') || '';
};

export const getAdminRefreshToken = (): string => {
  return Cookies.get('tedxits2023-admin-refresh-token') || '';
};
