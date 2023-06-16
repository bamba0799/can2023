import { useQuery } from '@tanstack/react-query';
import { getMatchs, getMatchsPerDate, getOneMatch } from '@hooks/api/matchs';

export const useMatchs = () => {
  return useQuery(['matchs'], getMatchs);
};

export const useMatchsPerDate = (date: string, enabled = true) => {
  return useQuery(['matchs', date], () => getMatchsPerDate(date), { enabled });
};

export const useMatch = (matchId: string, enabled = false) => {
  return useQuery(['matchs', matchId], () => getOneMatch(matchId), { enabled });
};
