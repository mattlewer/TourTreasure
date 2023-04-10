import React from 'react';
import * as color from '../../../constants/color';
import {View, Text, StyleSheet} from 'react-native';
import {typography} from '../../../constants/typography';

interface PlaceHeaderProps {
  placeName: string;
}
const PlaceHeader = (props: PlaceHeaderProps) => {
  return (
    <View style={style.containerOuter}>
      <View style={style.container}>
        <Text style={[typography.HeaderReg, {color: color.PRIMARY, textAlign: 'center'}]}>{props.placeName}</Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  containerOuter: {
    position: 'absolute',
    top:30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: '#fff',
    width: '80%',
    elevation: 2,
    shadowOffset: {width: 0, height: 2},
    shadowColor: '#000',
    shadowOpacity: 1,
  },
});
export default PlaceHeader;
