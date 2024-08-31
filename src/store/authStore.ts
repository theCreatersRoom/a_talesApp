import {create} from 'zustand';
import {UserDataType} from '../services/types/authServices.types';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthState {
  token: string;
  userData: UserDataType | null;
  setAuthState: (val: Partial<AuthState>) => void;
}

export const useAuthStore = create<AuthState>(set => ({
  token: '',
  userData: null,
  setAuthState: val => {
    if (val.token) {
      AsyncStorage.setItem('token', val.token);
    }
    set(val);
  },
}));
