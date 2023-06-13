import { API_BASE_URL } from '@env';
import { axiosInstance } from '@lib/axios';

const STADIUMS_API_URL = API_BASE_URL + '/stadiums';

export async function getAllStadiums() {
  const { data: stadiums } = await axiosInstance.get<any>(STADIUMS_API_URL);
  return stadiums;
}

export async function getOneStadium(stadiumId: string) {
  const URL = STADIUMS_API_URL + stadiumId;
  const { data: stadium } = await axiosInstance.get<any>(URL);
  return stadium;
}
