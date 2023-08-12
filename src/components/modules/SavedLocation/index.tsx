import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import * as color from '../../../constants/color';
import ProgressBar from '../ProgressBar';

interface SavedLocationProps {
  onPress: () => void;
  name: string;
  totalPlaces: number;
  visitedPlaces: number;
}
const SavedLocation = (props: SavedLocationProps) => {
  return (
    <Pressable style={style.container} onPress={props.onPress}>
      <View style={style.topRow}>
        <Text style={style.text}>{props.name}</Text>
        <Text
          style={style.text}
          accessibilityLabel={`${props.visitedPlaces} out of ${props.totalPlaces} places visited`}>
          {props.visitedPlaces}/{props.totalPlaces}
        </Text>
      </View>
      <View style={style.bottomRow}>
        <ProgressBar position={props.visitedPlaces} end={props.totalPlaces} />
      </View>
    </Pressable>
  );
};
const style = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 0,
    marginVertical: 9,
    borderRadius: 12,
    width: '100%',
    backgroundColor: color.WHITE_PRIMARY,
    flexDirection: 'column',
    elevation: 2,
    zIndex: 20,
  },
  topRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  text: {
    color: color.TEXT_DARK,
    fontSize: 20,
  },
  bottomRow: {
    width: '100%',
  },
});

export default SavedLocation;
