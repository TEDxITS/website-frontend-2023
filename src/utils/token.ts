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
