import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppButton from '../../common/AppButton';
import {NavigationProp} from '@react-navigation/native';
import {dummyData} from './assets/constanst';

type Props = {
  navigation: NavigationProp<any>;
};

export default function HomePage({navigation}: Props) {
  const newData = dummyData;
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <FlatList
        data={newData}
        renderItem={({item, index}) => (
          <TouchableOpacity className="w-[380] h-[180] m-[16] justify-center p-[16] bg-cyan-600 rounded-lg">
            <Text className="text-white">{item?.title}</Text>
            <Text className="text-white">{item?.brief}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => `story${index}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
