import {
  Animated,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import TaleTubeSvg from '../../routes/Header/assets/taleTubeSvg';
import {screenHeight, screenWidth} from '../../utils/helper';
import AppText from '../../common/AppText';
import Carousel from 'react-native-reanimated-carousel';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {Icon} from '../../common/Icon';
import {ChapterType, StoryType} from '../../services/types/storyServices.type';
import {
  fetchChpaterDetails,
  fetchStoryDetails,
} from '../../services/storyServices';
import PagerView from 'react-native-pager-view';
import LinearGradient from 'react-native-linear-gradient';
import {useAuthStore} from '../../store/authStore';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<any, any>;
  route: RouteProp<any>;
};

const content = `
Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy text ever
since the 1500s, when an unknown printer took a galley of type and
scrambled it to make a type specimen book. It has survived not only
five centuries, but also the leap into electronic typesetting,
remaining essentially unchanged. It was popularised in the 1960s with
the release of Letraset sheets containing Lorem Ipsum passages, and
more recently with desktop publishing software like Aldus PageMaker
including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy text ever
since the 1500s, when an unknown printer took a galley of type and
scrambled it to make a type specimen book. It has survived not only
five centuries, but also the leap into electronic typesetting,
remaining essentially unchanged. It was popularised in the 1960s with
the release of Letraset sheets containing Lorem Ipsum passages, and
more recently with desktop publishing software like Aldus PageMaker
including versions of Lorem Ipsum.`;

const ITEM_HEIGHT = 100;
const RIGHT_OFFSET = 40;

export default function StoryView({navigation, route}: Props) {
  const storyId = route.params?.storyId;
  const [story, setStory] = useState<StoryType>();
  const [chapters, setChapters] = useState<ChapterType[]>();
  const userData = useAuthStore(state => state.userData);

  useEffect(() => {
    if (storyId) {
      getStoryDetails(storyId);
    }
  }, [storyId]);

  const getStoryDetails = async (id: string) => {
    try {
      const result = await fetchStoryDetails(id);
      if (result) {
        setStory(result);
        let chaptersData: ChapterType[] = [];
        if (result.chapters.length == 0) {
          navigation.replace('StoryDetails', {id: storyId});
          return;
        }
        for (let item of result.chapters) {
          const result = await getChapterDetails(item.chapterId);
          if (result) {
            chaptersData.push(result);
          }
        }
        setChapters(chaptersData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getChapterDetails = async (id: string) => {
    try {
      const result = await fetchChpaterDetails(id);
      if (result) {
        return result;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onBackPress = () => {
    navigation.goBack();
  };

  const onEditPress = () => {
    navigation.replace('StoryDetails', {id: storyId});
  };

  const _renderHeaderLogo = () => {
    return (
      <TouchableOpacity
        className="absolute left-2"
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <TaleTubeSvg width={60} />
      </TouchableOpacity>
    );
  };

  const _renderMedia = () => {
    return (
      <View style={styles.media}>
        <View className="flex-1 justify-center items-center">
          <AppText className="font-bold text-[18px]">{story?.title}</AppText>
        </View>
      </View>
    );
  };

  const _renderPage = (chapter: ChapterType) => {
    return (
      <View className="flex-1 bg-black">
        {_renderMedia()}
        <ScrollView key="1" className="flex-1 ">
          <View style={styles.content}>
            <LinearGradient
              locations={[0, 0.9]}
              style={styles.gradiant}
              colors={['rgba(255, 255, 255, 0.02)', '#000']}>
              <AppText className="text-[18px] text-white font-bold pb-4">
                {chapter.title}
              </AppText>
            </LinearGradient>
            <View className="bg-black px-4">
              <AppText
                className={`text-[16px] w-[${screenWidth - 32}]} text-white`}>
                {chapter.content}
              </AppText>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={onBackPress}
          className="rounded-[99px] bg-[#0000009e]  w-9 h-9 absolute items-center justify-center left-3 top-3">
          <Icon
            type="MaterialIcons"
            name="arrow-back"
            size={25}
            color={'white'}
          />
        </TouchableOpacity>
        {story?.author === userData?._id && (
          <TouchableOpacity
            onPress={onEditPress}
            className="rounded-[99px] bg-[#0000009e] w-9 h-9 absolute items-center justify-center right-3 top-3">
            <Icon type="FontAwesome" name="edit" size={18} color={'white'} />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const _renderTextContent = () => {
    return (
      <View className="flex-1 ">
        <View style={styles.flatList}>
          <PagerView className="flex-1" initialPage={0}>
            {chapters?.map((item, index) => _renderPage(item))}
          </PagerView>
        </View>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-white">
      {/* {_renderMediaControls()} */}
      {_renderHeaderLogo()}
      {_renderTextContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  media: {
    width: '100%',
    height: screenHeight * 0.3,
    backgroundColor: 'lightblue',
    position: 'absolute',
    top: 0,
  },
  content: {
    // paddingTop: screenHeight * 0.15,
    // backgroundColor: 'black',
    // paddingHorizontal: 16,
  },
  flatList: {
    flex: 1,
  },
  gradiant: {
    paddingHorizontal: 16,
    paddingTop: screenHeight * 0.28,
  },
});
