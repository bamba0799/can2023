import { useQuery } from '@tanstack/react-query';
import { getCategories, getGoodDeals } from '../api';

export const useGoodDeals = () => {
  return useQuery({
    queryKey: ['goodDeals'],
    queryFn: getGoodDeals,
  });
};

export const useCategories = (enabled = true) => {
  return useQuery({
    enabled,
    queryKey: ['poi-categories'],
    queryFn: getCategories,
  });
};
