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
import {interpolate} from 'react-native-reanimated';

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

  const animationStyle: any = React.useCallback(
    (value: number) => {
      'worklet';

      const translateY = interpolate(
        value,
        [-1, 0, 1],
        [-ITEM_HEIGHT, 0, ITEM_HEIGHT],
      );
      const right = interpolate(
        value,
        [-1, -0.2, 1],
        [RIGHT_OFFSET / 2, RIGHT_OFFSET, RIGHT_OFFSET / 3],
      );
      return {
        transform: [{translateY}],
        right,
      };
    },
    [RIGHT_OFFSET],
  );

  const _renderTextContent = () => {
    const contentList = content.split('. ');
    return (
      <View className="px-4 pt-4 flex-1">
        <Text className="text-[16px] font-bold">Chapter 1</Text>
        <View style={styles.flatList}>
          <Carousel
            vertical
            width={screenWidth}
            height={screenHeight * 0.5}
            data={contentList}
            snapEnabled
            customAnimation={animationStyle}
            onSnapToItem={index => setCurrentItem(index)}
            renderItem={({item, index}) => (
              <View
                style={{
                  flex: 1,
                  // borderWidth: 1,
                  justifyContent: 'center',
                  height: ITEM_HEIGHT,
                  paddingLeft: 40,
                }}>
                <AppText
                  className="text-[14px] mt-2"
                  style={{
                    fontWeight: currentItem === index ? 'bold' : 'normal',
                  }}>
                  {item}
                </AppText>
              </View>
            )}
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
      {_renderHeaderLogo()}
      {_renderTextContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  media: {
    width: '100%',
    height: screenHeight * 0.4,
    backgroundColor: 'gray',
  },
  content: {
    paddingBottom: screenHeight * 0.4,
    paddingTop: screenHeight * 0.15,
  },
  flatList: {
    flex: 1,
  },
});
