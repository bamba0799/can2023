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

export function useFavTeams(enabled = true) {
  return useQuery(['fav-teams'], getFavTeams, {
    enabled,
  });
}

export function useAddTeamAsFav() {
  return useMutation(postFavTeam);
}

export function useRemoveTeamToFav() {
  return useMutation(removeFavTeam);
}
