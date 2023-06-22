import { API_BASE_URL } from '@env';
import { axiosInstance } from '@lib/axios';

const AUTH_API_URL = API_BASE_URL + '/auth';

type LoginProps = {
  contact: string;
};

type ValidateOTPProps = {
  OTP: string;
};

export async function login(props: LoginProps) {
  const URL = AUTH_API_URL + '/login-or-register';
  const { data } = await axiosInstance.post(URL, props);
  return data;
}

export async function validateOTP(props: ValidateOTPProps) {
  const URL = AUTH_API_URL + '/verify-otp';
  const { data } = await axiosInstance.post(URL, props);
  return data;
}
