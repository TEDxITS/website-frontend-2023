import { create } from 'zustand';

interface AuthState {
  name: string;
  isLoading: boolean;
  isAuthenticated: boolean;
  setName: (name: string) => void;
  setLoading: (isLoading: boolean) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  name: '',
  isLoading: false,
  isAuthenticated: false,
  setName: (name: string) => set({ name }),
  setLoading: (isLoading: boolean) => set({ isLoading }),
  setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
}));
