import {
  Animated,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {NavigationProp} from '@react-navigation/native';
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

type Props = {
  navigation: NavigationProp<any>;
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

export default function StoryView({navigation}: Props) {
  const [currentItem, setCurrentItem] = useState(0);

  const onTouchTextBlock = (index: number) => {
    setCurrentItem(index);
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
    return <View style={styles.media}></View>;
  };

  const _renderMediaControls = () => {
    return (
      <View className="bg-blue-100 flex-row justify-between py-2 px-3">
        <View className="px-2 bg-blue-400 rounded-lg items-center justify-center">
          <Icon
            type="MaterialIcons"
            name="arrow-back-ios"
            size={20}
            color="white"
          />
        </View>
        <View className="px-2 bg-blue-400 rounded-lg mx-2">
          <Icon
            type="MaterialCommunityIcons"
            name="play"
            size={30}
            color="white"
          />
        </View>
        <View className="px-2 bg-blue-400 rounded-lg items-center justify-center">
          <Icon
            type="MaterialIcons"
            name="arrow-forward-ios"
            size={20}
            color="white"
          />
        </View>
      </View>
    );
  };

  const _renderTextContent = () => {
    const contentList = content.split('. ');
    return (
      <View className="px-4 flex-1">
        <View style={styles.flatList}>
          <FlatList
            data={contentList}
            contentContainerStyle={styles.content}
            ListHeaderComponent={
              <AppText className="text-[16px] text-gray-500 font-bold">
                Chapter 1
              </AppText>
            }
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={onTouchTextBlock.bind(null, index)}
                  style={{
                    flex: 1,
                    // borderWidth: 1,
                    justifyContent: 'center',
                  }}>
                  <AppText
                    className="text-[14px] pt-2"
                    style={{
                      fontWeight: currentItem === index ? 'bold' : 'normal',
                      fontSize: currentItem === index ? 15 : 14,
                    }}>
                    {item}
                  </AppText>
                </TouchableOpacity>
              );
            }}
          />
          {/* <Animated.FlatList
            data={contentList}
            keyExtractor={(item, index) => index.toString()}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: scrollY}}}],
              {useNativeDriver: true},
            )}
            style={{flexGrow: 0}}
            contentContainerStyle={styles.content}
            snapToInterval={100}
            renderItem={({item, index}) => {
             
              return (
                <Animated.View
                  style={{
                    height: 100,
                    // backgroundColor: 'red',
                    transform: [{scale: translateSize}],
                    // borderWidth: 2,
                    marginBottom: 4,
                    alignItems: 'center',
                  }}>
                  <AppText className="text-[14px] mt-2 text-center">
                    {item}
                  </AppText>
                </Animated.View>
              );
            }}
          /> */}
        </View>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-white">
      {_renderMedia()}
      {_renderMediaControls()}
      {_renderHeaderLogo()}
      {_renderTextContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  media: {
    width: '100%',
    height: screenHeight * 0.3,
    backgroundColor: 'gray',
  },
  content: {
    paddingBottom: screenHeight * 0.4,
    // paddingTop: screenHeight * 0.15,
    paddingTop: 20,
  },
  flatList: {
    flex: 1,
  },
});
