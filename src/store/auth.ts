import { create } from 'zustand';

export type User = {
  id: string;
  contact: string;
};

type AuthProps = {
  user: User | null;
  TOKEN_KEY: string;
  setUser: <T extends User>(user: T | null) => Promise<void>;
};

export const useAuthStore = create<AuthProps>((set) => ({
  user: {
    id: '1a60c942-33bc-465d-80e3-3a682e85c3c7',
    contact: '0584364096',
  },
  TOKEN_KEY: 'token',
  setUser: (user: any) =>
    new Promise((rejected, resolved) => {
      set({ user });
      resolved(true);
    }),
}));
