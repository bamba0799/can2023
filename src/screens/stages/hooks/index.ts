import { useQuery } from '@tanstack/react-query';
import { fetchAllGroups } from '../api';

export const useFetchAllGroups = (enabled = true) => {
  return useQuery({
    queryKey: ['fetchAllGroups'],
    queryFn: fetchAllGroups,
    enabled,
  });
};
