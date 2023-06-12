import { API_BASE_URL } from '@env';
import { axiosInstance } from '@lib/axios';

export type GoodDealsQueryParam = {
  limit: number;
  status: 'vip' | 'regular';
};

const GB_RESOURCE_PATH = API_BASE_URL + '/extra/good-deals';
const POI_RESOURCE_PATH = API_BASE_URL + '/extra/poi';

// API calls
export const getGoodDeals = async () => {
  const { data } = await axiosInstance.get(GB_RESOURCE_PATH);
  return data;
};

export const getVIP = async () => {
  const URL = POI_RESOURCE_PATH + '?status=vip&limit=3';
  const { data } = await axiosInstance.get<any[]>(URL);
  return data;
};

export const getPOIByCategory = async (id: string) => {
  const URL = POI_RESOURCE_PATH + '/byCategory/' + id;
  const { data, statusText } = await axiosInstance.get<any[]>(URL);
  return data;
};

export const getCategories = async () => {
  const { data, status } = await axiosInstance.get<any[]>(
    POI_RESOURCE_PATH + '/categories'
  );
  return data;
};
