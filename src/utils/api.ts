import axios, {AxiosInstance} from 'axios';
import {BASE_URL} from '../services/apiUrls';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: 'Bearer <your_access_token>',
  },
});

const addTokenToHeaders = (config: any) => {
  const token = AsyncStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
};

axios.interceptors.request.use(addTokenToHeaders);

export default API;
