'use client';

import { useQuery } from '@tanstack/react-query';

import { useAuthStore } from '@/store/useAuthStore';

import api from '@/utils/api';

export default function StoreInitializer() {
  const logIn = useAuthStore((state) => state.logIn);
  const logOut = useAuthStore((state) => state.logOut);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const { data } = await api.get('/user');
      return data;
    },
    onSuccess(data) {
      logIn(
        data.response.user,
        data.response.accessToken,
        data.response.refreshToken
      );
    },
    onError() {
      logOut();
    },
    enabled: !isAuthenticated,
  });

  return null;
}
