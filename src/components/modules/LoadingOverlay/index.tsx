import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import * as color from '../../../constants/color';

const LoadingOverlay = () => {
  return (
    <View style={style.container}>
      <ActivityIndicator size={'large'} color={color.PRIMARY} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10000,
    backgroundColor: color.BLACK + '66',
  },
});

export default LoadingOverlay;
