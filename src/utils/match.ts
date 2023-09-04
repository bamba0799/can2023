import { API_BASE_URL } from '@env';
import { axiosInstance } from '@lib/axios';

export const getMatchs = async () => {
  const { data } = await axiosInstance.get(`${API_BASE_URL}/matchs`);
  return data;
};

export async function fetchAllMatchs() {
  let matchs;
  try {
    let matchsInitial = [{ id: '0', label: 'choissez un match' }];
    let matchsApi = await getMatchs();
    matchsApi = matchsApi.map((match: any) => {
      return {
        id: match.id,
        label: `${match.matchStats[0].team.name} - ${match.matchStats[1].team.name}`,
      };
    });
    matchs = matchsInitial.concat(matchsApi);
  } catch (e: any) {
    console.log(e.message);
  }
  return matchs;
}

export const getDatePerMatchs = async (id: string) => {
  const allMatchs = await getMatchs();
  const match = allMatchs.filter((match: any) => match.id === id);
  return match;
};
