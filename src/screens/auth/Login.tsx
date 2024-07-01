import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppText from '../../common/AppText';
import AppInput from '../../common/AppInput';
import {screenHeight} from '../../utils/helper';
import AppButton from '../../common/AppButton';
import {NavigationProp} from '@react-navigation/native';

type Props = {
  navigation: NavigationProp<any>;
};

export default function Login({navigation}: Props) {
  const navigateToResetPassword = () => {
    navigation.navigate('ForgotPassword');
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
        <AppInput placeholder="Email" className="mt-4" />
        <AppInput placeholder="Password" secureTextEntry className="mt-4" />
        <TouchableOpacity onPress={navigateToResetPassword}>
          <AppText className="mt-4 self-end text-[12px]">
            Forgot Password?
          </AppText>
        </TouchableOpacity>
        <AppButton
          onPress={() => navigation.navigate('MainRoutes')}
          className="mt-6"
          label="Login"
        />
        <View className="mt-4 items-center">
          <AppText className="text-[14px] font-bold">OR</AppText>
        </View>
        <AppButton
          onPress={() => navigation.navigate('Register')}
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
