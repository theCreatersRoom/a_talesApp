import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import AppText from './AppText';

type Props = {
  className?: string;
  label?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export default function AppButton({style, label, className, onPress}: Props) {
  return (
    <TouchableOpacity
      className={'bg-[#db3f3f] rounded-[8px] py-2.5 items-center ' + className}
      style={style}
      onPress={onPress}>
      <AppText className="text-white font-bold">{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
