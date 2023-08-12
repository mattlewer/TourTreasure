import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as color from '../../../constants/color';

interface HomeStatProps {
  stat: string;
  desc: string;
}
const HomeStat = (props: HomeStatProps) => {
  return (
    <View style={style.container} accessible>
      <Text style={style.textStat}>{props.stat}</Text>
      <Text style={style.textDesc}>{props.desc}</Text>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flexShrink: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDesc: {
    fontSize: 14,
    color: color.WHITE,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  textStat: {
    color: color.WHITE,
    fontSize: 20,
    fontWeight: '600',
  },
});

export default HomeStat;
