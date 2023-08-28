import React from 'react';
import {Pressable, Image, StyleSheet} from 'react-native';
import * as color from '../../../constants/color';

interface FloatingButtonProps {
  onPress: () => void;
  disabled?: boolean;
  image: HTMLImageElement;
  removeElevation?: boolean;
}
const FloatingButton = (props: FloatingButtonProps) => {
  return (
    <Pressable
      onPressIn={props.onPress}
      disabled={props.disabled}
      style={[style.container, !props.removeElevation && style.elevation]}>
      <Image source={props.image} style={style.icon} />
    </Pressable>
  );
};
const style = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: color.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  elevation: {
    elevation: 2,
    shadowOffset: {width: 0, height: 2},
    shadowColor: color.BLACK,
    shadowOpacity: 1,
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});
export default FloatingButton;
