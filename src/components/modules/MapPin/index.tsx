import {View, Text, StyleSheet} from 'react-native';
import * as color from '../../../constants/color';
import React from 'react';

interface MapPinProps {
  placeNumber: number;
  isVisited: boolean;
}
const MapPin = (props: MapPinProps) => {
  const pinStyle = props.isVisited
    ? style.mapPinVisited
    : style.mapPinNotVisited;
  const textStyle = props.isVisited
    ? style.mapPinTextVisited
    : style.mapPinTextNotVisited;

  return (
    <View style={[style.mapPinContainer, pinStyle]}>
      <Text style={[style.mapPinText, textStyle]}>{props.placeNumber}</Text>
    </View>
  );
};
const style = StyleSheet.create({
  mapPinContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapPinNotVisited: {
    backgroundColor: color.PRIMARY,
  },
  mapPinVisited: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: color.PRIMARY,
  },
  mapPinText: {
    fontSize: 10,
    marginBottom: 2,
  },
  mapPinTextNotVisited: {
    color: '#fff',
  },
  mapPinTextVisited: {
    color: color.PRIMARY,
  },
});
export default MapPin;
