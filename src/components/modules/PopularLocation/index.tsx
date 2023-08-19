import React from 'react';
import {Text, StyleSheet, Pressable, View, Image} from 'react-native';
import * as color from '../../../constants/color';
import { PopularPlace } from '../../../interfaces/popularPlace';

interface PopularLocationProps {
  place: PopularPlace;
  onSearchLocation: (placeName: string) => void;
}
const PopularLocation = (props: PopularLocationProps) => {
  return (
    <Pressable
      style={style.container}
      onPress={() => props.onSearchLocation(props.place.name)}>
      <Image style={style.image} source={props.place.image}/>
      <Text style={[style.title]}>{props.place.name}</Text>
    </Pressable>
  );
};
const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  title: {
    color: color.PRIMARY,
    fontSize: 14,
    fontWeight: "500",
  },
  image:{
    width: 50,
    height: 50,
    borderRadius: 20,
    resizeMode: 'center',
  }
});
export default PopularLocation;
