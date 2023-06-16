import { create } from 'zustand';

type Props = {
  matchId: string | null;
  paypalAccessToken: string | null;
};

type Actions = {
  setMatchId: (id: string | null) => void;
  setPaypalAccessToken: (token: string | null) => void;
};

export const useMainStore = create<Props & Actions>((set) => ({
  matchId: null,
  paypalAccessToken: null,
  setMatchId: (id) => set({ matchId: id }),
  setPaypalAccessToken: (token) => set({ paypalAccessToken: token }),
}));
