import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as color from '../../../constants/color';

interface HomeStatCardProps{
    stat: string;
    desc: string;
}
const HomeStatCard = (props: HomeStatCardProps) => {
  return (
    <View style={style.container}>
      <Text style={style.textDesc}>{props.desc}</Text>
      <Text style={style.textStat}>{props.stat}</Text>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    height: 90,
    width: 90,
    margin: 2,
    borderRadius: 55,
    backgroundColor: color.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStat: {
    color: color.PRIMARY,
    fontSize: 30,
  },
  textDesc: {
    fontSize: 12,
    color: color.BLACK,
    fontWeight: '500',
    flexWrap: 'wrap',
    textAlign: 'center',
  },
});

export default HomeStatCard;
