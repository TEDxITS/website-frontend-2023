'use client';

import { useQuery } from '@tanstack/react-query';

import { useAuthStore } from '@/store/useAuthStore';

import api from '@/utils/api';

export default function StoreInitializer() {
  const setName = useAuthStore((state) => state.setName);
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const { data } = await api.get('/user');
      return data;
    },
    onSuccess(data) {
      setName(data.name);
      setIsAuthenticated(true);
    },
    onError() {
      setIsAuthenticated(false);
    },
    enabled: !isAuthenticated,
  });

  return null;
}
