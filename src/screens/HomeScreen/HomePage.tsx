import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AppButton from '../../common/AppButton';
import {NavigationProp, useFocusEffect} from '@react-navigation/native';
import {dummyData} from './assets/constanst';
import AppText from '../../common/AppText';
import {StoryType} from '../../services/types/storyServices.type';
import {useLoadingStore} from '../../store/loadingStore';
import {fetchUserStories} from '../../services/storyServices';
import {useAuthStore} from '../../store/authStore';

type Props = {
  navigation: NavigationProp<any>;
};

export default function HomePage({navigation}: Props) {
  const [myStories, setMyStories] = useState<StoryType[]>([]);
  const newData = dummyData;
  const setLoader = useLoadingStore(state => state.setLoader);
  const userData = useAuthStore(state => state.userData);

  useFocusEffect(
    React.useCallback(() => {
      getUserStories();
    }, []),
  );

  const getUserStories = async () => {
    setLoader(true);
    try {
      const result = await fetchUserStories(userData?._id || '');
      if (result) {
        setMyStories(result.reverse());
      }
    } catch (err) {
      console.log(err);
    }
    setLoader(false);
  };

  const navigateToStory = (item: StoryType) => {
    navigation.navigate('StoryView', {storyId: item._id});
  };

  const _renderMyStorySection = () => {
    return (
      <View className="">
        {myStories.length > 0 && (
          <View>
            <AppText className="text-[16px] font-bold px-4 pt-4 pb-2">
              My Stories
            </AppText>
            <View className="bg-gray-200 h-[1px] mx-4" />
            <ScrollView
              horizontal
              className="py-2"
              showsHorizontalScrollIndicator={false}>
              {myStories.map(story => (
                <TouchableOpacity
                  onPress={navigateToStory.bind(null, story)}
                  className="mx-3 bg-[#05C02B] rounded-md h-[100px] w-[200px] justify-end py-3 px-3"
                  key={story._id}>
                  <AppText className="text-[14px] font-bold text-white">
                    {story.title}
                  </AppText>
                  <AppText className="text-[10px] text-white" numberOfLines={2}>
                    {story.description}
                  </AppText>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
        <AppText className="text-[16px] font-bold px-4 pt-4 pb-2">
          Popular
        </AppText>
        <View className="bg-gray-200 h-[1px] mx-4" />
      </View>
    );
  };

  return (
    <View className="flex-1 justify-center bg-white">
      <FlatList
        data={newData}
        ListHeaderComponent={_renderMyStorySection()}
        renderItem={({item, index}) => (
          <TouchableOpacity
            // onPress={navigateToStory.bind(null, item)}
            className="h-[180] m-[16] justify-center p-[16] bg-cyan-600 rounded-lg">
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
