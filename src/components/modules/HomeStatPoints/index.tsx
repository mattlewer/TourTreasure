import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {typography} from '../../../constants/typography';
import * as color from '../../../constants/color';

interface HomeStatPointsProps {
  stat: string;
  desc: string;
}
const HomeStatePoints = (props: HomeStatPointsProps) => {
  return (
    <View style={style.outerContainer}>
      <View style={style.container} accessible>
        <Text style={style.textDesc}>{props.desc}</Text>
        <Text style={[typography.PointsStat, style.textStat]}>
          {props.stat}
        </Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  outerContainer: {
    position: 'relative',
    alignItems: 'center',
    flex: 1,
    margin: 2,
    marginBottom: 15,
  },
  container: {
    height: 120,
    width: 120,
    borderRadius: 65,
    backgroundColor: color.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStat: {
    color: color.PRIMARY,
    fontSize: 40,
  },
  textDesc: {
    color: color.TEXT_DARK,
    fontSize: 12,
    fontWeight: '500',
    flexWrap: 'wrap',
    textAlign: 'center',
  },
});

export default HomeStatePoints;
