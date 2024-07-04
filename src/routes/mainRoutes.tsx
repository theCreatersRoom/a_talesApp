import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';
import Header from './Header';
import Notification from '../screens/Notification';

const Stack = createNativeStackNavigator();

export default function MainRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <Header {...props} />,
      }}>
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
