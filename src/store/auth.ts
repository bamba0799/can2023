import { create } from 'zustand';

export type User = {
  id: string;
  contact: string;
  firstName:string;
  lastName:string
};

type AuthProps = {
  user: User | null;
  TOKEN_KEY: string;
  setUser: <T extends User>(user: T | null) => Promise<void>;
};

export const useAuthStore = create<AuthProps>((set) => ({
  user: null,
  TOKEN_KEY: 'token',
  setUser: (user: any) =>
    new Promise((rejected, resolved) => {
      set({ user });
      resolved(true);
    }),
}));
