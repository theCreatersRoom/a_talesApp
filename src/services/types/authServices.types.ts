import {
  DocumentPickerOptions,
  DocumentPickerResponse,
} from 'react-native-document-picker';

export type registerUserType = (userData: {
  name: string;
  email: string;
  password: string;
  mobile: string;
  profilePic?: DocumentPickerResponse;
}) => Promise<SuccessType>;

export type SuccessType = {success: boolean; message: string};

export type loginUserType = (userData: any) => Promise<any>;
export type forgotPasswordType = (userData: any) => Promise<any>;
export type resetPasswordType = (userData: any) => Promise<any>;
