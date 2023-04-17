import { create } from 'zustand';

import {
  setAdminRefreshToken,
  setAdminToken,
  setRefreshToken,
  setToken,
} from '@/utils/token';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  admin: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  logIn: (user: User, accessToken: string, refreshToken: string) => void;
  logOut: () => void;
  adminLogIn: (admin: User, accessToken: string, refreshToken: string) => void;
  adminLogout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  admin: null,
  isLoading: false,
  isAuthenticated: false,
  logIn: (user: User, accessToken: string, refreshToken: string) => {
    setToken(accessToken);
    setRefreshToken(refreshToken);
    set({ user, isAuthenticated: true });
  },
  logOut: () => {
    setToken('');
    setRefreshToken('');
    set({ user: null, isAuthenticated: false });
  },
  adminLogIn: (admin: User, accessToken: string, refreshToken: string) => {
    setAdminToken(accessToken);
    setAdminRefreshToken(refreshToken);
    set({ admin });
  },
  adminLogout: () => {
    setAdminToken('');
    setAdminRefreshToken('');
    set({ admin: null });
  },
}));
