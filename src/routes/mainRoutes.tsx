import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';
import Header from './Header';
import Notifcation from '../screens/Notification';
import StoryView from '../screens/story/StoryView';
import ChapterDetails from '../screens/CreateScreen/ChapterDetails';
import StorySuccess from '../screens/CreateScreen/StorySuccess';
import CreateNew from '../screens/CreateScreen/CreateNew';

const Stack = createNativeStackNavigator();

export default function MainRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <Header {...props} />,
      }}>
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      <Stack.Screen name="CreateStory" component={CreateNew} />
      <Stack.Screen name="Notification" component={Notifcation} />
      <Stack.Screen
        name="StoryView"
        component={StoryView}
        options={{headerShown: false}}
      />
      <Stack.Screen name="ChapterDetails" component={ChapterDetails} />
      <Stack.Screen name="StorySuccess" component={StorySuccess} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
