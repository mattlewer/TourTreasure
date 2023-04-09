import {View, Image, StyleSheet} from 'react-native';
import * as color from '../../../constants/color';
import Lottie from 'lottie-react-native';
import Logo from '../../../assets/logo.png';

import React from 'react';

const IconWithBirds = () => {
  return (
    <View>
      <Image source={Logo} style={style.logo} />
      <Lottie
        source={require('../../../assets/birds1.json')}
        speed={0.6}
        autoPlay
        loop={true}
        style={{zIndex: 600}}
      />
    </View>
  );
};
const style = StyleSheet.create({
  logo: {
    height: 250,
    width: 250,
    resizeMode: 'contain',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: color.PRIMARY,
  },
});

export default IconWithBirds;
