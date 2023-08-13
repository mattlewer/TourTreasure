import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import * as color from '../../../constants/color';
import Lottie from 'lottie-react-native';
import Logo from '../../../assets/logo.png';

interface IconWithBirdsProps {
  small?: boolean;
}
const IconWithBirds = (props: IconWithBirdsProps) => {
  return (
    <View>
      <Image
        source={Logo}
        style={[
          style.logo,
          {height: props.small ? 130 : 200, width: props.small ? 130 : 200},
        ]}
      />
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
    height: 200,
    width: 200,
    resizeMode: 'contain',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: color.PRIMARY,
  },
});

export default IconWithBirds;
