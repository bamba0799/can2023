import { useMutation, useQuery } from '@tanstack/react-query';
import { getPaypalAccessToken, payUsingPaypal } from '../api/payment';

export function usePaypalAccessToken(enabled = false) {
  return useQuery(['paypal-access-token'], getPaypalAccessToken, { enabled });
}

export function usePayUsingPaypal() {
  return useMutation(payUsingPaypal);
}
