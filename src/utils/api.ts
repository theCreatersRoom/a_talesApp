import axios, {AxiosInstance} from 'axios';
import {BASE_URL} from '../services/apiUrls';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const addTokenToHeaders = (config: any, token?: string) => {
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
};

export default API;
