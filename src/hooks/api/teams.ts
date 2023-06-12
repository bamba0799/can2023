import { getCurrentTeams, getFavTeams } from '@api/teams';
import { useQuery } from '@tanstack/react-query';

export function useCurrentTeams(enabled = true) {
  return useQuery(['current-teams'], getCurrentTeams, { enabled });
}

export function useFavTeams(userId: string, enabled = true) {
  return useQuery(['fav-teams', userId], () => getFavTeams(userId), {
    enabled,
  });
}
