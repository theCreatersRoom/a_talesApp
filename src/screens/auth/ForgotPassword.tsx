import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../../common/AppText';
import {screenHeight} from '../../utils/helper';

export default function ForgotPassword() {
  const _renderHeaderSplash = () => {
    return (
      <View className={`bg-red-500 rounded-br-[99px] py-4 `}>
        <View className="px-4 justify-center">
          <AppText className="text-[16px] text-white font-bold">
            Forgot Password
          </AppText>
        </View>
      </View>
    );
  };
  return <View className="h-full bg-white">{_renderHeaderSplash()}</View>;
}

const styles = StyleSheet.create({});
