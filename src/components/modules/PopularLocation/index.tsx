import React from 'react';
import {Text, StyleSheet, Pressable, View} from 'react-native';
import * as color from '../../../constants/color';

interface PopularLocationProps {
  name: string;
  onSearchLocation: (placeName: string) => void;
}
const PopularLocation = (props: PopularLocationProps) => {
  return (
    <Pressable
      style={style.container}
      onPress={() => props.onSearchLocation(props.name)}>
      <View style={style.circle} />
      <Text style={[style.title]}>{props.name}</Text>
    </Pressable>
  );
};
const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: color.WHITE_PRIMARY,
  },
  title: {
    color: color.PRIMARY,
    fontSize: 14,
  },
});
export default PopularLocation;
