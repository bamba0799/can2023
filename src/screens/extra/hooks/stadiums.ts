import { useQuery } from '@tanstack/react-query';
import { getAllStadiums, getOneStadium } from '../api/stadiums';

export function useAllStadiums(enabled = true) {
  return useQuery(['stadiums'], getAllStadiums, { enabled });
}

export function useStadium(stadiumId: string, enabled = false) {
  return useQuery(['stadiums', stadiumId], () => getOneStadium(stadiumId), {
    enabled,
  });
}
