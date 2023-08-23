import { API_BASE_URL } from '@env';
import { axiosInstance } from '@lib/axios';

const STAGES_API_URL = API_BASE_URL + '/groups?fields=id,label,teams';

export const fetchAllGroups = async () => {
  const { data, status } = await axiosInstance.get<any[]>(STAGES_API_URL);
  if (status !== 200) throw data;
  return data;
};
