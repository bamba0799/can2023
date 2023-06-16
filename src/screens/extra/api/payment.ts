import {
  PAYPAL_CHECKOUT_URL,
  PAYPAL_CLIENT_ID,
  PAYPAL_CLIENT_SECRET,
  PAYPAL_TOKEN_URL,
} from '@env';
import { axiosInstance } from '@lib/axios';
import { Buffer } from 'buffer';

export async function getPaypalAccessToken() {
  const AUTH = Buffer.from(
    `${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`
  ).toString('base64');

  const { data } = await axiosInstance.post<any>(
    PAYPAL_TOKEN_URL,
    'grant_type=client_credentials',
    {
      headers: {
        Authorization: `Basic ${AUTH}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );

  return data;
}

export async function payUsingPaypal(props: {
  accessToken: string;
  requestPayload: any;
}) {
  const { data } = await axiosInstance.post<any>(
    PAYPAL_CHECKOUT_URL,
    props.requestPayload,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${props.accessToken}`,
      },
    }
  );

  return data;
}

export const capturePayment = (id: any, token = '') => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return new Promise((resolve, reject) => {
    fetch(
      'https://api.sandbox.paypal.com' + `/v2/checkout/orders/${id}/capture`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log('result print', result);
        const res = JSON.parse(result);
        resolve(res);
      })
      .catch((error) => {
        console.log('error raised', error);
        reject(error);
      });
  });
};
