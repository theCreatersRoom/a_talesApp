import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import React from 'react';

type Props = {
  style?: StyleProp<TextInput>;
} & TextInputProps;

export default function AppInput({style, ...props}: Props) {
  return (
    <View className="border-[1px] border-[#F9D3D3] rounded-[8px]" style={style}>
      <TextInput {...props} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    paddingHorizontal: 10,
  },
});
