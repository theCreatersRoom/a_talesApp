import {StyleSheet, Text, TextProps, View} from 'react-native';
import React from 'react';

type Props = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  weight?: 'normal' | 'bold';
  color?: string;
  children: React.ReactNode;
} & TextProps;

const FONT_SIZES = {
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
};

export default function AppText({
  size = 'sm',
  weight = 'normal',
  color = 'black',
  className,
  children,
  ...props
}: Props) {
  return (
    <Text
      style={{fontSize: FONT_SIZES[size], fontWeight: weight, color}}
      className={'text-[#000] ' + className}
      {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({});
