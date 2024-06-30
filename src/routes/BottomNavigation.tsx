import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomeScreen/HomePage';
import Popular from '../screens/HomeScreen/Popular';
import CreateNew from '../screens/CreateScreen/CreateNew';
import Profile from '../screens/ProfileScreen/Profile';
import Tutorial from '../screens/HomeScreen/Tutorial';
import {MyTabBar} from './MyTabBar';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Popular" component={Popular} />
      <Tab.Screen name="Create" component={CreateNew} />
      <Tab.Screen name="Tutorial" component={Tutorial} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
