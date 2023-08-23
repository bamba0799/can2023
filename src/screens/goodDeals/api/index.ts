import { API_BASE_URL } from '@env';
import { axiosInstance } from '@lib/axios';

export type GoodDealsQueryParam = {
  limit: number;
  status: 'vip' | 'regular';
};

const EXTRA_API_URL = API_BASE_URL + '/extra';

// API calls
export const getGoodDeals = async () => {
  const GB_RESOURCE_PATH = EXTRA_API_URL + '/good-deals';
  const { data } = await axiosInstance.get(GB_RESOURCE_PATH);
  return data;
};

export const getVIP = async () => {
  const URL = EXTRA_API_URL + '/spot-category?status=vip';
  const { data } = await axiosInstance.get<any[]>(URL);
  return data;
};

export const getPOIByCategory = async (id: string) => {
  const URL =
    EXTRA_API_URL + `/spot-category/${id}?fields=id,label,spots,photo`;
  const { data, statusText } = await axiosInstance.get<any[]>(URL);
  return data;
};

export const getCategories = async () => {
  const { data, status } = await axiosInstance.get<any[]>(
    EXTRA_API_URL + '/spot-category?fields=id,label,spots,photo'
  );
  if (status !== 200) throw data;
  return data;
};
