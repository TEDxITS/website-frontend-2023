'use client';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

import { useAuthStore } from '@/store/useAuthStore';

import api from '@/utils/api';
import { getRefreshToken, getToken } from '@/utils/token';

export default function StoreInitializer() {
  const logIn = useAuthStore((state) => state.logIn);
  const logOut = useAuthStore((state) => state.logOut);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const ref = React.useRef<boolean>(false);

  const query = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const { data } = await api.get('/user/get-info');
      return data;
    },
    refetchInterval: 1000 * 60 * 60 * 24,
    refetchOnWindowFocus: false,
    enabled: !isAuthenticated,
  });

  React.useEffect(() => {
    if (query.data && !ref.current) {
      logIn(query.data.data, getToken(), getRefreshToken());
      ref.current = true;
    } else if (!query.data && ref.current) {
      logOut();
      ref.current = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.data]);

  return null;
}
