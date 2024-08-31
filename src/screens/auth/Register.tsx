import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../../common/AppText';
import AppInput from '../../common/AppInput';
import AppButton from '../../common/AppButton';
import {NavigationProp} from '@react-navigation/native';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';
import {registerUser} from '../../services/authServices';
import Toast from 'react-native-toast-message';
import {useLoadingStore} from '../../store/loadingStore';
import {useAuthStore} from '../../store/authStore';

type Props = {
  navigation: NavigationProp<any>;
};

const schema = yup.object().shape({
  name: yup.string().required('Username is required'),
  username: yup.string().required('Username is required'),
  email: yup.string().email().required('Email is required').email(),
  mobile: yup.string().required('Mobile is required'),
  password: yup.string().min(6).required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

export default function Register({navigation}: Props) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });
  const setLoader = useLoadingStore(state => state.setLoader);
  const setAuthState = useAuthStore(state => state.setAuthState);

  const onSubmit = async (data: yup.InferType<typeof schema>) => {
    setLoader(true);
    try {
      const result = await registerUser({
        email: data.email,
        username: data.username,
        name: data.name,
        password: data.password,
        mobile: data.mobile,
      });
      if (result) {
        Toast.show({
          type: 'success',
          text1: 'Account created successfully',
        });
        setAuthState({token: result.token, userData: result.user});
      }
    } catch (err: any) {
      Toast.show({
        type: 'error',
        text1: err.response?.data?.message,
      });
      console.log(err.response.data);
    }
    setLoader(false);
  };

  const _renderHeaderSplash = () => {
    return (
      <View className={`bg-red-500 rounded-br-[60px] py-4 px-2`}>
        <View className="px-4 justify-center">
          <AppText className="text-[16px] text-white font-bold">
            Create New Account
          </AppText>
          <AppText className="text-[14px] mt-1 pr-3 text-white">
            Give us your basic details, we will create your account
          </AppText>
        </View>
      </View>
    );
  };

  const _renderContent = () => {
    return (
      <View className="px-4 pt-4">
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              placeholder="Username"
              className="mt-4"
              value={value}
              onChangeText={onChange}
            />
          )}
          name="username"
          rules={{required: true}}
        />
        {errors.name && (
          <AppText className="text-red-500 text-[12px] mt-1 ml-2">
            {errors.name.message}
          </AppText>
        )}
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              placeholder="Name"
              className="mt-4"
              value={value}
              onChangeText={onChange}
            />
          )}
          name="name"
          rules={{required: true}}
        />
        {errors.username && (
          <AppText className="text-red-500 text-[12px] mt-1 ml-2">
            {errors.username.message}
          </AppText>
        )}
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              placeholder="Email"
              className="mt-4"
              value={value}
              onChangeText={onChange}
            />
          )}
          name="email"
          rules={{required: true}}
        />
        {errors.email && (
          <AppText className="text-red-500 text-[12px] mt-1 ml-2">
            {errors.email.message}
          </AppText>
        )}
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              placeholder="Mobile"
              className="mt-4"
              value={value}
              onChangeText={onChange}
              maxLength={10}
            />
          )}
          name="mobile"
          rules={{required: true}}
        />
        {errors.mobile && (
          <AppText className="text-red-500 text-[12px] mt-1 ml-2">
            {errors.mobile.message}
          </AppText>
        )}
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              placeholder="Password"
              className="mt-4"
              value={value}
              onChangeText={onChange}
            />
          )}
          name="password"
          rules={{required: true}}
        />
        {errors.password && (
          <AppText className="text-red-500 text-[12px] mt-1 ml-2">
            {errors.password.message}
          </AppText>
        )}
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              placeholder="Confirm Password"
              className="mt-4"
              value={value}
              onChangeText={onChange}
            />
          )}
          name="confirmPassword"
          rules={{required: true}}
        />
        {errors.confirmPassword && (
          <AppText className="text-red-500 text-[12px] mt-1 ml-2">
            {errors.confirmPassword.message}
          </AppText>
        )}
        <AppButton
          onPress={handleSubmit(onSubmit)}
          className="mt-6"
          label="Create Account"
        />
        <View className="mt-4 items-center">
          <AppText className="text-[12px]">
            Already have an account?{' '}
            <AppText className="text-[12px] text-blue-500">Login</AppText>
          </AppText>
        </View>
      </View>
    );
  };

  return (
    <View>
      {_renderHeaderSplash()}
      {_renderContent()}
    </View>
  );
}

const styles = StyleSheet.create({});
