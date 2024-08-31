import {Platform} from 'react-native';
import {
  registerUserType,
  getUserDataType,
  loginUserType,
} from './types/authServices.types';
import API from '../utils/api';
import {LOGIN_URL, REGISTER_URL, USER_DATA_URL} from './apiUrls';

export const registerUser: registerUserType = async userData => {
  const {name, username, email, password, mobile, profilePic} = userData;
  const formData = new FormData();
  formData.append('name', name);
  formData.append('username', username);
  formData.append('email', email);
  formData.append('password', password);
  formData.append('mobile', mobile);
  if (profilePic) {
    formData.append('file', {
      name: profilePic?.name,
      type: profilePic?.type,
      uri:
        Platform.OS === 'ios'
          ? profilePic.uri.replace('file://', '')
          : profilePic.uri,
    });
  }
  const result = await API.post(REGISTER_URL, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return result.data;
};

export const loginUser: loginUserType = async userData => {
  const {email, password} = userData;
  const result = await API.post(LOGIN_URL, {
    email,
    password,
  });
  return result.data;
};

export const getUserData: getUserDataType = async (token: string) => {
  const result = await API.get(USER_DATA_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};
