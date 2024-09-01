import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../../common/AppText';
import AppInput from '../../common/AppInput';
import CustUpload from '../../common/CustUpload';
import {Icon} from '../../common/Icon';
import {DocumentPickerResponse} from 'react-native-document-picker';
import AppDropdown from '../../common/AppDropdown';
import AppButton from '../../common/AppButton';
import {NavigationProp} from '@react-navigation/native';
import * as Yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import Toast from 'react-native-toast-message';
import {createNewStory} from '../../services/storyServices';
import {useAuthStore} from '../../store/authStore';
import {useLoadingStore} from '../../store/loadingStore';

const DATA = Array(100)
  .fill(0)
  .map((_, index) => ({
    label: `${index + 1}`,
    value: `${index + 1}`,
  }));

type Props = {
  navigation: NavigationProp<any>;
};

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required')
    .min(3, 'Title must be at least 3 characters long'),
  description: Yup.string()
    .required('Description is required')
    .min(10, 'Description must be at least 10 characters long'),
  tags: Yup.string(),
  // chapters: Yup.number()
  //   .required('Chapters count is required')
  //   .min(1, 'Chapters count must be at least 1'),
});

export default function CreateNew({navigation}: Props) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const userData = useAuthStore(state => state.userData);
  const setLoader = useLoadingStore(state => state.setLoader);

  const onSubmit = async (data: Yup.InferType<typeof validationSchema>) => {
    setLoader(true);
    try {
      let newTags: string[] = [];
      if (data.tags) {
        newTags = data.tags.replace(/ /g, '').split(',');
      }
      const result = await createNewStory({
        title: data.title,
        description: data.description,
        tags: newTags,
        // chapters: data.chapters,
        author: userData!._id,
      });
      if (result) {
        Toast.show({
          type: 'success',
          text1: 'Story created successfully',
        });
        navigation.navigate('StoryDetails', {id: result._id});
      }
    } catch (err: any) {
      Toast.show({
        type: 'error',
        text1: 'Something went wrong',
      });
    }
    setLoader(false);
  };

  return (
    <View className="flex-1 bg-white px-4 pt-4">
      <View className="border-b border-b-[#FFB8B8] pb-4">
        <AppText className="font-bold text-[16px]" weight="bold">
          Create New Story
        </AppText>
      </View>
      <View className="mt-4">
        <AppText className="text-[14px]">Story Title*</AppText>
        <Controller
          control={control}
          name="title"
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              className="mt-2"
              placeholder="Enter Story Title"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.title && (
          <AppText className="text-red-500 text-[12px] mt-1 ml-2">
            {errors.title.message}
          </AppText>
        )}
      </View>
      <View className="mt-4">
        <AppText className="text-[14px]">Description*</AppText>
        <Controller
          control={control}
          name="description"
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              className="mt-2"
              placeholder="Enter Description"
              multiline
              numberOfLines={3}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.description && (
          <AppText className="text-red-500 text-[12px] mt-1 ml-2">
            {errors.description.message}
          </AppText>
        )}
      </View>
      <View className="mt-4">
        <AppText className="text-[14px]">Add Tags</AppText>
        <Controller
          control={control}
          name="tags"
          render={({field: {onChange, value}}) => (
            <AppInput
              className="mt-2"
              placeholder="Enter tags seperated by ,"
              multiline
              numberOfLines={3}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.tags && (
          <Text style={{color: 'red'}}>{errors.tags.message}</Text>
        )}
      </View>
      {/* <View className="mt-6 border-t border-t-[#FFB8B8] pt-4">
        <AppText className="text-[14px] mb-2">Chapters*</AppText>

        <Controller
          control={control}
          name="chapters"
          render={({field: {onChange, value}}) => (
            <AppDropdown
              items={DATA}
              dataKey="label"
              selected={{label: value}}
              postfix="Chapters"
              onSelectItem={val => onChange(val.value)}
            />
          )}
        />
        {errors.chapters && (
          <AppText className="text-red-500 text-[12px] mt-1 ml-2">
            {errors.chapters.message}
          </AppText>
        )}
      </View> */}
      <AppButton
        className="mt-6"
        label="Continue"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
