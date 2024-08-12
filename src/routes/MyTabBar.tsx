import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Icon} from '../common/Icon';

export const MyTabBar = (props: any) => {
  const {state, descriptors, navigation} = props;
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            if (route.name === 'Create') {
              navigation.navigate('CreateStory');
            } else {
              navigation.navigate(route.name, route.params);
            }
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={`bottom-tab-${index}`}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{alignItems: 'center'}}>
            <Icon
              type={'MaterialCommunityIcons'}
              name={
                label === 'Home'
                  ? isFocused
                    ? 'home'
                    : 'home-outline'
                  : label === 'Popular'
                  ? isFocused
                    ? 'fire-circle'
                    : 'fire'
                  : label === 'Create'
                  ? isFocused
                    ? 'plus-circle'
                    : 'plus-circle-outline'
                  : label === 'Tutorial'
                  ? isFocused
                    ? 'play-box-multiple'
                    : 'play-box-multiple-outline'
                  : label === 'Profile'
                  ? isFocused
                    ? 'account'
                    : 'account-outline'
                  : 'circle-small'
              }
              size={label !== 'Create' ? 30 : 45}
              color="black"
            />
            {label !== 'Create' && (
              <Text style={{color: isFocused ? '#673ab7' : '#222'}}>
                {label}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 4,
    paddingHorizontal: 10,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.0,
    backgroundColor: 'white',
    elevation: 10,
  },
});
