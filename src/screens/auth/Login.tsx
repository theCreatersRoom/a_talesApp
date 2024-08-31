import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppText from '../../common/AppText';
import AppInput from '../../common/AppInput';
import {screenHeight} from '../../utils/helper';
import AppButton from '../../common/AppButton';
import {NavigationProp} from '@react-navigation/native';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {loginUser} from '../../services/authServices';
import Toast from 'react-native-toast-message';
import {useLoadingStore} from '../../store/loadingStore';
import {useAuthStore} from '../../store/authStore';

type Props = {
  navigation: NavigationProp<any>;
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function Login({navigation}: Props) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });
  const setLoader = useLoadingStore(state => state.setLoader);
  const setAuthState = useAuthStore(state => state.setAuthState);
  const navigateToResetPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSubmit = async (data: yup.InferType<typeof schema>) => {
    setLoader(true);
    try {
      const result = await loginUser({
        email: data.email,
        password: data.password,
      });
      if (result) {
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

  const onRegisterClick = () => {
    navigation.navigate('Register');
  };

  const _renderHeaderSplash = () => {
    return (
      <View
        className={`bg-red-500 rounded-br-[99px]`}
        style={{height: screenHeight * 0.3, width: '100%'}}>
        <View className="px-4 h-full justify-center">
          <AppText size="xl" color="white" weight="bold">
            Embark on new journey through various stories.
          </AppText>
          <AppText className="text-[14px] mt-1 text-white">
            Login or Create an account to continue.
          </AppText>
        </View>
      </View>
    );
  };

  const _renderLoginInputs = () => {
    return (
      <View className="flex-1 px-4 pt-4">
        <AppText size="lg">Login</AppText>
        <Controller
          control={control}
          name="email"
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              placeholder="Email"
              className="mt-4"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.email && (
          <AppText className="text-red-500 text-[12px] mt-1 ml-2">
            {errors.email.message}
          </AppText>
        )}
        <Controller
          control={control}
          name="password"
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              placeholder="Password"
              className="mt-4"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.password && (
          <AppText className="text-red-500 text-[12px] mt-1 ml-2">
            {errors.password.message}
          </AppText>
        )}
        <TouchableOpacity onPress={navigateToResetPassword}>
          <AppText className="mt-4 self-end text-[12px]">
            Forgot Password?
          </AppText>
        </TouchableOpacity>
        <AppButton
          onPress={handleSubmit(onSubmit)}
          className="mt-6"
          label="Login"
        />
        <View className="mt-4 items-center">
          <AppText className="text-[14px] font-bold">OR</AppText>
        </View>
        <AppButton
          onPress={onRegisterClick}
          className="mt-6"
          label="Create New Account"
        />
      </View>
    );
  };
  return (
    <View className="flex-1 bg-white">
      {_renderHeaderSplash()}
      {_renderLoginInputs()}
    </View>
  );
}

const styles = StyleSheet.create({});
