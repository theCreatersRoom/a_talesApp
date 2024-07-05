import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../../common/AppText';
import {screenHeight} from '../../utils/helper';
import AppButton from '../../common/AppButton';
import AppInput from '../../common/AppInput';
import {NavigationProp} from '@react-navigation/native';

type Props = {
  navigation: NavigationProp<any>;
};

export default function ForgotPassword({navigation}: Props) {
  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  const _renderHeaderSplash = () => {
    return (
      <View className={`bg-red-500 rounded-br-[99px] py-4 px-2`}>
        <View className="px-4 justify-center">
          <AppText className="text-[16px] text-white font-bold">
            Forgot Password
          </AppText>
          <AppText className="text-[14px] mt-1 text-white">
            Enter your email and we will send you a password reset link
          </AppText>
        </View>
      </View>
    );
  };

  const _renderContent = () => {
    return (
      <View className="flex-1 px-4 pt-4">
        <AppInput placeholder="Email" className="mt-4" />
        <AppButton
          onPress={() => {}}
          className="mt-6"
          label="Send Reset Link"
        />
        <View className="mt-4 items-center">
          <AppText className="text-[12px]">
            Go back to Login,{' '}
            <AppText
              className="text-[12px] text-blue-500"
              onPress={navigateToLogin}>
              click here
            </AppText>
          </AppText>
        </View>
      </View>
    );
  };
  return (
    <View className="h-full bg-white">
      {_renderHeaderSplash()}
      {_renderContent()}
    </View>
  );
}

const styles = StyleSheet.create({});
