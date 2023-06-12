import { create } from 'zustand';

export type User = {
  userId: string;
  contact: string;
};

type AuthProps = {
  user: User | null;
  setUser: <T extends User>(user: T | null) => Promise<void>;
};

export const useAuthStore = create<AuthProps>((set) => ({
  user: {
    userId: '1',
    contact: '0709056925',
  },
  setUser: (user: any) =>
    new Promise((rejected, resolved) => {
      set({ user });
      resolved();
    }),
}));
