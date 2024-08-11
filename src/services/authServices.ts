import {Platform} from 'react-native';
import {registerUserType} from './types/authServices.types';
import API from '../utils/api';
import {REGISTER_URL} from './apiUrls';

export const registerUser: registerUserType = async userData => {
  const {name, email, password, mobile, profilePic} = userData;
  const formData = new FormData();
  formData.append('name', name);
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
  const result = await API.post(REGISTER_URL, formData);
  return result.data;
};
