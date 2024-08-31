import {Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoaderKit from 'react-native-loader-kit';
import AppText from './AppText';

type Props = {
  laoding: boolean;
};

export default function Loader({laoding}: Props) {
  if (!laoding) return null;
  return (
    <Modal visible={laoding} transparent>
      <View className="h-full justify-center items-center bg-[#000000cc]">
        <LoaderKit
          className="w-[40px] h-[40px]"
          name={'LineScaleParty'}
          color={'white'}
        />
        <AppText className="text-white mt-3">Loading</AppText>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({});
