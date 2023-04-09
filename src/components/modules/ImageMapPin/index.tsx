import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import MapPin from '../../../assets/map_pin.png';
import HasVisitedMapPin from '../../../assets/found_pin.png';

interface ImageMapPinProps {
  hasVisited?: boolean;
  image?: HTMLImageElement;
}
const ImageMapPin = (props: ImageMapPinProps) => {
  return (
    <View style={style.container}>
      <Image source={props.hasVisited ? HasVisitedMapPin : MapPin } style={style.pinIcon} />
      {props.image && <Image source={props.image} style={style.pinImage} />}
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    position: 'relative',
    height: 40,
    width: 40,
    alignItems: 'center',
    elevation: 5,
    shadowOffset: {width: 0, height: 2},
    shadowColor: '#000',
    shadowOpacity: 1,
  },
  pinIcon: {
    position: 'absolute',
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  pinImage: {
    position: 'absolute',
    top: 2,
    height: 20,
    width: 20,
    borderRadius: 15,
    resizeMode: 'contain',
  },
});
export default ImageMapPin;
