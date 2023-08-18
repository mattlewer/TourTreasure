import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import LogoKidBW from '../../../assets/logoKidBW.png';
import * as color from '../../../constants/color';

interface NoInfoProps {
  text: string;
}
const NoInfo = (props: NoInfoProps) => {
  return (
    <View style={style.container}>
      <Image source={LogoKidBW} style={style.logo} />
      <Text style={style.text}>{props.text}</Text>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 150,
    width: 150,
  },
  text: {
    color: color.TEXT_DARK + 'aa',
    paddingTop: 20,
    textAlign: 'center',
    width: '70%',
  },
});
export default NoInfo;
