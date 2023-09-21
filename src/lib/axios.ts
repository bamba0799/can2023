import axios from 'axios';
import { API_BASE_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    if (!config.headers['Authorization']) {
      let isAuth = await AsyncStorage.getItem('token');
      if (isAuth) {
        const auth = JSON.parse(isAuth);
        config.headers['Authorization'] = `Bearer ${auth.accessToken}`;
      }
    }
    return config;
  },
  (e) => Promise.reject(e)
);

// TODO: add a response interceptor to automatically
// refresh the access token when it expires

export { axiosInstance };
