import {
  DocumentPickerOptions,
  DocumentPickerResponse,
} from 'react-native-document-picker';

export type registerUserType = (userData: {
  name: string;
  username: string;
  email: string;
  password: string;
  mobile: string;
  profilePic?: DocumentPickerResponse;
}) => Promise<SuccessType>;

export type loginUserType = (userData: {
  email: string;
  password: string;
}) => Promise<SuccessType>;

export type SuccessType = {message: string; token: string; user: UserDataType};
export type forgotPasswordType = (userData: any) => Promise<any>;
export type resetPasswordType = (userData: any) => Promise<any>;

export type getUserDataType = (token: string) => Promise<UserDataType>;

export type UserDataType = {
  _id: string;
  name: string;
  username: string;
  email: string;
  mobile: string;
  profilePicture?: string;
};
