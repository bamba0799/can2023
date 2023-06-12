import { useQuery } from '@tanstack/react-query';
import { getMatchs, getMatchsPerDate } from '../api';

export const useMatchs = () => {
  return useQuery(['matchs'], getMatchs);
};

export const useMatchsPerDate = (date: string, enabled = true) => {
  return useQuery(['matchs', date], () => getMatchsPerDate(date), { enabled });
};
