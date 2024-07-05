import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../../common/AppText';
import AppInput from '../../common/AppInput';
import AppButton from '../../common/AppButton';
import {NavigationProp} from '@react-navigation/native';

type Props = {
  navigation: NavigationProp<any>;
};

export default function Register({navigation}: Props) {
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
        <AppInput placeholder="Name" className="mt-4" />
        <AppInput placeholder="Email" className="mt-4" />
        <AppInput placeholder="Mobile" className="mt-4" />
        <AppInput placeholder="Password" secureTextEntry className="mt-4" />
        <AppInput
          placeholder="Confirm Password"
          secureTextEntry
          className="mt-4"
        />
        <AppButton onPress={() => {}} className="mt-6" label="Create Account" />
        <View className="mt-4 items-center">
          <AppText className="text-[12px]">
            Already have an account?{' '}
            <AppText
              className="text-[12px] text-blue-500"
              onPress={() => navigation.navigate('Login')}>
              Login
            </AppText>
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
