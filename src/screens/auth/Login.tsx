import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppText from '../../common/AppText';
import {PropTypes} from './Login.types';

export default function Login(props: PropTypes) {
  const {navigation} = props;
  const _renderHeaderSplash = () => {
    return (
      <View className="bg-red-500 w-full h-1/3 rounded-br-[99px]">
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
      <TouchableOpacity
        className="flex-1 px-4 pt-4"
        onPress={() => {
          navigation.navigate('MainRoutes');
        }}>
        <AppText size="lg">Login</AppText>
      </TouchableOpacity>
    );
  };
  return (
    <View className="flex-1">
      {_renderHeaderSplash()}
      {_renderLoginInputs()}
    </View>
  );
}

const styles = StyleSheet.create({});
