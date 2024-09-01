import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppButton from '../../common/AppButton';
import AppText from '../../common/AppText';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import AppInput from '../../common/AppInput';
import CustUpload from '../../common/CustUpload';
import {DocumentPickerResponse} from 'react-native-document-picker';
import Toast from 'react-native-toast-message';
import {
  addNewChapter,
  deleteChapter,
  fetchChpaterDetails,
  updateChapter,
} from '../../services/storyServices';
import {ChapterType} from '../../services/types/storyServices.type';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';
import {useLoadingStore} from '../../store/loadingStore';

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  content: yup.string().required('Content is required'),
});

type Props = {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
};

export default function ChapterDetails({navigation, route}: Props) {
  const chapterId: string = route.params?.chapterId;
  const storyId: string = route.params?.storyId;
  const [file, setFile] = useState<DocumentPickerResponse | null>(null);
  const [chapter, setChapter] = useState<ChapterType>();
  const setLoader = useLoadingStore(state => state.setLoader);

  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (chapterId) {
      getChapterDetails(chapterId);
    }
  }, []);

  const getChapterDetails = async (id: string) => {
    setLoader(true);
    try {
      const result = await fetchChpaterDetails(id);
      if (result) {
        setValue('title', result.title);
        setValue('content', result.content);
        setChapter(result);
      }
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Something went wrong',
      });
    }
    setLoader(false);
  };

  const onSubmit = async (data: yup.InferType<typeof schema>) => {
    setLoader(true);
    try {
      const {title, content} = data;
      if (chapterId) {
        const result = await updateChapter({
          chapterId: chapterId,
          title: title,
          content: content,
        });
        if (result) {
          Toast.show({
            type: 'success',
            text1: 'Chapter updated successfully',
          });
          navigation.goBack();
        }
      } else {
        const result = await addNewChapter({
          title: title,
          content: content,
          storyId: storyId,
        });
        if (result) {
          Toast.show({
            type: 'success',
            text1: 'Chapter created successfully',
          });
          navigation.goBack();
        }
      }
    } catch (err) {
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
          {chapterId ? 'Chapter Edit' : 'Add Chapter'}
        </AppText>
      </View>
      <View className="mt-4">
        <AppText className="text-[14px]">Title*</AppText>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              className="mt-2"
              placeholder="Enter Chapter Title"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
          name="title"
          rules={{required: true}}
        />
        {errors.title && (
          <AppText className="text-red-500 text-[12px] mt-1 ml-2">
            {errors.title.message}
          </AppText>
        )}
      </View>
      <View className="mt-4">
        <AppText className="text-[14px]">Content*</AppText>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              className="mt-2"
              placeholder="Enter Contents of Chapter"
              multiline
              numberOfLines={3}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
          name="content"
          rules={{required: true}}
        />
        {errors.content && (
          <AppText className="text-red-500 text-[12px] mt-1 ml-2">
            {errors.content.message}
          </AppText>
        )}
      </View>
      <View className="mt-4">
        <AppText className="text-[14px] mb-2">Media</AppText>
        <CustUpload file={file} onFileUpload={setFile} />
      </View>
      <AppButton
        className="mt-6"
        label="Submit"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
