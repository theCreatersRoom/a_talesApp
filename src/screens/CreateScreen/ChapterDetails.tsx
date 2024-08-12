import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AppButton from '../../common/AppButton';
import AppText from '../../common/AppText';
import {NavigationProp} from '@react-navigation/native';
import AppInput from '../../common/AppInput';
import CustUpload from '../../common/CustUpload';
import {DocumentPickerResponse} from 'react-native-document-picker';

type Props = {
  navigation: NavigationProp<any>;
};

export default function ChapterDetails({navigation}: Props) {
  const [file, setFile] = useState<DocumentPickerResponse | null>(null);
  return (
    <View className="flex-1 bg-white px-4 pt-4">
      <View className="border-b border-b-[#FFB8B8] pb-4">
        <AppText className="font-bold text-[16px]" weight="bold">
          Chapter 1
        </AppText>
      </View>
      <View className="mt-4">
        <AppText className="text-[14px]">Title*</AppText>
        <AppInput className="mt-2" placeholder="Enter Chapter Title" />
      </View>
      <View className="mt-4">
        <AppText className="text-[14px]">Content*</AppText>
        <AppInput
          className="mt-2"
          placeholder="Enter Contents of Chapter"
          multiline
          numberOfLines={3}
        />
      </View>
      <View className="mt-4">
        <AppText className="text-[14px] mb-2">Media</AppText>
        <CustUpload file={file} onFileUpload={setFile} />
      </View>
      <AppButton
        className="mt-6"
        label="Continue"
        onPress={() => {
          navigation.navigate('StorySuccess');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
