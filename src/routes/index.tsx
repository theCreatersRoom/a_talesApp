import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainRoutes from './mainRoutes';
import AuthRoutes from './authRoutes';
import Toast from 'react-native-toast-message';
import Loader from '../common/Loader';
import {useLoadingStore} from '../store/loadingStore';
import {useAuthStore} from '../store/authStore';
import axios from 'axios';
import {addTokenToHeaders} from '../utils/api';
import {getUserData} from '../services/authServices';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const token = useAuthStore(state => state.token);
  const setAuthState = useAuthStore(state => state.setAuthState);
  console.log('🚀 ~ App ~ token:', token);
  const loading = useLoadingStore(state => state.loading);

  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    axios.interceptors.request.use(config => addTokenToHeaders(config, token));
  }, [token]);

  async function getToken() {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      const result = await getUserData(token);
      if (result) {
        setAuthState({token: token, userData: result});
      }
    }
  }

  return (
    <View className="flex-1">
      <NavigationContainer>
        {token ? <MainRoutes /> : <AuthRoutes />}
        <Loader laoding={loading} />
      </NavigationContainer>
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({});
