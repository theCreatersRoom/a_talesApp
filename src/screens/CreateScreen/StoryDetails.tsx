import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppText from '../../common/AppText';
import {Icon} from '../../common/Icon';
import {
  StoryChapterType,
  StoryType,
} from '../../services/types/storyServices.type';
import {
  NavigationProp,
  RouteProp,
  useFocusEffect,
} from '@react-navigation/native';
import {deleteChapter, fetchStoryDetails} from '../../services/storyServices';
import {useLoadingStore} from '../../store/loadingStore';
import Toast from 'react-native-toast-message';

type Props = {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
};

export default function StoryDetails({navigation, route}: Props) {
  const storyId = route.params?.id;
  const [story, setStory] = useState<StoryType>();
  const setLoader = useLoadingStore(state => state.setLoader);

  useFocusEffect(
    React.useCallback(() => {
      getStoryDetails();
    }, []),
  );

  const getStoryDetails = async () => {
    setLoader(true);
    try {
      const result = await fetchStoryDetails(storyId);
      if (result) {
        setStory(result);
      } else {
        throw new Error('Something went wrong');
      }
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Something went wrong',
      });
    }
    setLoader(false);
  };

  const onPressChapter = (item?: StoryChapterType) => {
    navigation.navigate('ChapterDetails', {
      storyId,
      chapterId: item?.chapterId,
    });
  };

  const onDeleteChapter = async (item: StoryChapterType) => {
    setLoader(true);
    try {
      const result = await deleteChapter(item.chapterId);
      if (result) {
        Toast.show({
          type: 'success',
          text1: 'Chapter deleted successfully',
        });
        await getStoryDetails();
      }
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Something went wrong',
      });
    }
    setLoader(false);
  };

  if (!story) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <AppText>No story details found...</AppText>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white px-4 py-4">
      <AppText className="text-[16px] font-bold">Story Details</AppText>
      <View className="mt-4 bg-green-200 py-4 px-3 rounded-md">
        <View className="flex-row justify-between">
          <AppText className="text-[14px] font-bold">{story?.title}</AppText>
          <AppText className="text-[12px]">{story.authorName}</AppText>
        </View>
        <AppText className="text-[12px] mt-1">{story.description}</AppText>
      </View>
      <View className="mt-4">
        <AppText className="text-[14px] font-bold">Chapters</AppText>
        <View>
          {story.chapters.map((chapter, index) => (
            <TouchableOpacity
              className="mt-4 bg-orange-200 py-4 px-3 rounded-md"
              onPress={onPressChapter.bind(null, chapter)}>
              <View className="flex-row justify-between items-center">
                <AppText className="text-[14px]">
                  {index + 1}. {chapter.title}
                </AppText>
                <View className="flex-row items-center gap-2">
                  <View className="items-center bg-orange-100 rounded-[99px] p-1">
                    <Icon type="MaterialIcons" name="edit" size={16} />
                  </View>
                  <TouchableOpacity
                    onPress={onDeleteChapter.bind(null, chapter)}
                    className="items-center bg-orange-100 rounded-[99px] p-1">
                    <Icon type="MaterialIcons" name="delete" size={16} />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            className="mt-4 bg-orange-100 py-4 px-3 rounded-md"
            onPress={() => onPressChapter()}>
            <View className="flex-row justify-center items-center">
              <Icon type="MaterialCommunityIcons" name="plus" size={20} />
              <AppText className="text-[14px] ml-2 font-bold">
                Add chapter
              </AppText>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
