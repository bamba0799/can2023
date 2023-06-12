import { API_BASE_URL } from '@env';
import { axiosInstance } from '@lib/axios';

const TEAMS_API_URL = API_BASE_URL + '/teams';

export async function getCurrentTeams() {
  const { data } = await axiosInstance.get<any>(TEAMS_API_URL);
  return data;
}

export async function getFavTeams(userId: string) {
  const URL = TEAMS_API_URL + '/fav/' + userId;
  const { data } = await axiosInstance.get<any>(URL);
  return data;
}
