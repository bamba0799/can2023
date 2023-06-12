import { API_BASE_URL } from '@env';
import { axiosInstance } from '@lib/axios';

const STAGES_API_URL = API_BASE_URL + '/groups';

export const fetchAllGroups = async () => {
  const { data } = await axiosInstance.get<any>(STAGES_API_URL);
  return data;
};
