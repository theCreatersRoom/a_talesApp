import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../../common/AppText';
import AppInput from '../../common/AppInput';
import CustUpload from '../../common/CustUpload';
import {Icon} from '../../common/Icon';
import {DocumentPickerResponse} from 'react-native-document-picker';
import ItemSelectorDropdown from '../../common/AppDropdown';
import AppButton from '../../common/AppButton';
import {NavigationProp} from '@react-navigation/native';

const DATA = Array(100)
  .fill(0)
  .map((_, index) => ({
    label: `${index + 1}`,
    value: `${index + 1}`,
  }));

type Props = {
  navigation: NavigationProp<any>;
};
export default function CreateNew({navigation}: Props) {
  return (
    <View className="flex-1 bg-white px-4 pt-4">
      <View className="border-b border-b-[#FFB8B8] pb-4">
        <AppText className="font-bold text-[16px]" weight="bold">
          Create New Story
        </AppText>
      </View>
      <View className="mt-4">
        <AppText className="text-[14px]">Story Title*</AppText>
        <AppInput className="mt-2" placeholder="Enter Story Title" />
      </View>
      <View className="mt-4">
        <AppText className="text-[14px]">Description*</AppText>
        <AppInput
          className="mt-2"
          placeholder="Enter Description"
          multiline
          numberOfLines={3}
        />
      </View>
      <View className="mt-4">
        <AppText className="text-[14px]">Add Tags</AppText>
        <AppInput
          className="mt-2"
          placeholder="Enter tags seperated by ,"
          multiline
          numberOfLines={3}
        />
      </View>
      <View className="mt-6 border-t border-t-[#FFB8B8] pt-4">
        <AppText className="text-[14px] mb-2">Chapters*</AppText>
        <ItemSelectorDropdown items={DATA} dataKey="label" />
      </View>
      <AppButton
        className="mt-6"
        label="Continue"
        onPress={() => {
          navigation.navigate('ChapterDetails');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
