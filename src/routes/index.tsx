import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainRoutes from './mainRoutes';
import AuthRoutes from './authRoutes';

export default function App() {
  const token = false;

  return (
    <View className="h-full">
      <NavigationContainer>
        {token ? <MainRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({});
