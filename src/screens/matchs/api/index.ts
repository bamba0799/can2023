import { API_BASE_URL } from '@env';
import { axiosInstance } from '@lib/axios';

const MATCHS_API_URL = API_BASE_URL + '/matchs';

export const getMatchs = async () => {
  const { data, statusText } = await axiosInstance.get<any>(MATCHS_API_URL);
  return data;
};

export const getMatchsPerDate = async (date: string) => {
  const URL = MATCHS_API_URL + '?' + new URLSearchParams({ date }).toString();
  const { data, statusText } = await axiosInstance.get<any>(URL);
  return data;
};
