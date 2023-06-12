import { API_BASE_URL } from '@env';
import { axiosInstance } from '@lib/axios';

const TEAMS_API_URL = API_BASE_URL + '/teams';
const FAV_TEAMS_API_URL = TEAMS_API_URL + '/fav';

export async function getCurrentTeams() {
  const URL = TEAMS_API_URL + '?current=1&userId=1';
  const { data } = await axiosInstance.get<any>(URL);
  return data;
}

export async function getFavTeams(userId: string) {
  const URL = FAV_TEAMS_API_URL + '/' + userId;
  const { data } = await axiosInstance.get<any>(URL);
  return data;
}

export async function postFavTeam(props: {
  teamId: string;
  userId: string;
  isMemberOfCurrentCAN: boolean;
}) {
  const { data, status } = await axiosInstance.post<any>(
    FAV_TEAMS_API_URL,
    props
  );
  return data;
}

export async function removeFavTeam(props: { userId: string; teamId: string }) {
  const { data, status } = await axiosInstance.delete<any>(FAV_TEAMS_API_URL, {
    data: props,
  });
  return data;
}
