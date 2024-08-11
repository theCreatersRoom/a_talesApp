import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../../common/AppText';
import CheckCircleSvg from './assets/checkCircleSvg';
import {NavigationProp} from '@react-navigation/native';
import AppButton from '../../common/AppButton';

type Props = {
  navigation: NavigationProp<any>;
};

export default function StorySuccess({navigation}: Props) {
  return (
    <View className="flex-1 bg-white px-4 pt-4">
      <View className="pb-4 items-center mt-10">
        <CheckCircleSvg width={40} height={40} />
        <AppText className="font-bold mt-4">
          Created New Story Successfully!
        </AppText>
        <AppText className="mt-2">
          You can check story analytics in profile section.
        </AppText>
      </View>
      <AppButton
        className="mt-6"
        label="Go To Home"
        onPress={() => navigation.navigate('BottomNavigation')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
