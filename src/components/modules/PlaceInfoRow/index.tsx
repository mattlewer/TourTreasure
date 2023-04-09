import React from 'react';
import * as color from '../../../constants/color';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Place} from '../../../interfaces/place';
import {typography} from '../../../constants/typography';
import PlaceStats from '../PlaceStats';
import MapPin from '../MapPin';

interface PlaceInfoRowProps {
  place: Place;
  isVisited: boolean;
  placeNumber: number;
  onPress: (place: Place) => void;
}
const PlaceInfoRow = (props: PlaceInfoRowProps) => {
  return (
    <Pressable
      style={style.container}
      key={props.place.place_id}
      onPress={() => props.onPress(props.place)}>
      <View style={style.placeNameNumberContainer}>
        <MapPin placeNumber={props.placeNumber} isVisited={props.isVisited}/>
        <Text style={[typography.BodyReg, style.headingText]}>
          {props.place.name}
        </Text>
      </View>
      <PlaceStats place={props.place} />
    </Pressable>
  );
};
const style = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: '#fff7f9',
    padding: 16,
    marginBottom: 10,
    width: '100%',
    elevation: 2,
    shadowOffset: {width: 0, height: 2},
    shadowColor: '#000',
    shadowOpacity: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  placeNameNumberContainer:{
    flexDirection: 'row',
    alignItems:'center',
    marginBottom: 10,
  },
  headingText: {
    paddingLeft: 10,
    fontWeight: '600',
    color: color.PRIMARY,
  },
});
export default PlaceInfoRow;
