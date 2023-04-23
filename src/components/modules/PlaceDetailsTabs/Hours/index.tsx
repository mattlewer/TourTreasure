import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PlaceDetails} from '../../../../interfaces/placeDetails';
import {typography} from '../../../../constants/typography';
import * as color from '../../../../constants/color';

interface HoursProps {
  details: PlaceDetails;
}

const Hours = (props: HoursProps) => {
  return (
    <View style={style.openingTextContainer}>
      {props.details.opening_hours.weekday_text.map(day => {
        const timeParts = day.split(': ');
        return (
          <View style={style.openingTextRow}>
            <Text
              style={[
                typography.BodyReg,
                {textAlign: 'center', color: color.PRIMARY, fontWeight: '500'},
              ]}>
              {timeParts[0]}
            </Text>
            <Text style={[typography.BodyReg, {textAlign: 'center'}]}>
              {timeParts[1]}
            </Text>
          </View>
        );
      })}
    </View>
  );
};
const style = StyleSheet.create({
  openingTextContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-evenly',
  },
  openingTextRow: {
    textAlign: 'center',
    marginVertical: 5,
  },
});
export default Hours;
