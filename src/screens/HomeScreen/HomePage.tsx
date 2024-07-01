import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppButton from '../../common/AppButton';
import {NavigationProp} from '@react-navigation/native';

type Props = {
  navigation: NavigationProp<any>;
};

export default function HomePage({navigation}: Props) {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text>HomePage</Text>
      <AppButton
        className="px-4 mt-4"
        label="Go to Story"
        onPress={() => navigation.navigate('StoryView')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
