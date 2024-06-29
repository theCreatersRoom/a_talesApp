import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {IconType} from './CommonTypes';

export const Icon = (props: IconType) => {
  const {type, name, size, color} = props;
  console.log('name', name, size, color);
  switch (type) {
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons name={name} size={size} color={color} />;
    case 'MaterialIcons':
      return <MaterialIcons name={name} size={size} color={color} />;
    default:
      return <MaterialCommunityIcons name={name} size={size} color={color} />;
  }
};

const styles = StyleSheet.create({});
