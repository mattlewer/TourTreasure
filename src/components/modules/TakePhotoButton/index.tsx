import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import * as color from '../../../constants/color';

interface TakePhotoButton {
  onPress: (setOpen: boolean) => void;
}
const TakePhotoButton = (props: TakePhotoButton) => {
  return (
    <Pressable
      onPress={() => props.onPress(true)}
      style={style.takePhotoButton}>
      <Text style={style.takePhotoButtonText}>Add photo</Text>
    </Pressable>
  );
};
const style = StyleSheet.create({
  takePhotoButton: {
    width: '50%',
    elevation: 5,
    shadowOffset: {width: 0, height: 2},
    shadowColor: color.BLACK,
    shadowOpacity: 1,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    margin: 3,
    backgroundColor: color.TERTIARY,
  },
  takePhotoButtonText: {
    color: color.WHITE,
    fontWeight: '500',
  },
});

export default TakePhotoButton;
