import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import TaleTubeSvg from './assets/taleTubeSvg';
import {Icon} from '../../common/Icon';

export default function Header(props: any) {
  const {navigation, route} = props;

  const renderBackButton = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.pop();
        }}
        className="self-center p-[2] mr-[4]">
        <Icon
          type="MaterialIcons"
          name="arrow-back-ios"
          size={20}
          color="#52585C"
        />
      </TouchableOpacity>
    );
  };
  const renderHeaderLogo = () => {
    return (
      <TouchableOpacity
        className="overflow-hidden my-[-8]"
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <TaleTubeSvg />
      </TouchableOpacity>
    );
  };

  const renderSearchIcon = () => {
    return (
      <TouchableOpacity>
        <Icon type="MaterialIcons" name="search" size={30} color="black" />
      </TouchableOpacity>
    );
  };

  const renderNotificationIcon = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Notification');
        }}>
        <Icon
          type="MaterialCommunityIcons"
          name="bell-outline"
          size={30}
          color="black"
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View className="flex-row">
        {route.name !== 'BottomNavigation' && renderBackButton()}
        {renderHeaderLogo()}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent:
            route.name !== 'Notification' ? 'space-between' : 'flex-end',
          width: 80,
        }}>
        {route.name !== 'Notification' && renderNotificationIcon()}
        {renderSearchIcon()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 6,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6.0,
  },
});
