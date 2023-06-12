import {
  getCurrentTeams,
  getFavTeams,
  postFavTeam,
  removeFavTeam,
} from '@api/teams';
import { useMutation, useQuery } from '@tanstack/react-query';

export function useCurrentTeams(enabled = true) {
  return useQuery(['current-teams'], getCurrentTeams, { enabled });
}

export function useFavTeams(userId: string, enabled = true) {
  return useQuery(['fav-teams', userId], () => getFavTeams(userId), {
    enabled,
  });
}

export function useAddTeamAsFav() {
  return useMutation(postFavTeam);
}

export function useRemoveTeamToFav() {
  return useMutation(removeFavTeam);
}
