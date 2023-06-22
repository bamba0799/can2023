import { useMutation } from '@tanstack/react-query';
import { login, validateOTP } from '@api/auth';

export function useLogin() {
  return useMutation({ mutationFn: login });
}

export function useValidateOTP() {
  return useMutation({ mutationFn: validateOTP });
}
