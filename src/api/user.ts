import { API_BASE_URL } from '@env';
import { axiosInstance } from '@lib/axios';

const USER_API_URL = API_BASE_URL + '/user';

export async function getUser(token: string) {
  return await axiosInstance.get(USER_API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function getUserProfile(token: string) {
  const URL = USER_API_URL + '/profile';
  const { data } = await axiosInstance.get(URL, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data;
}
