import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import * as color from '../../../constants/color';
import { localise } from '../../../services/lang/lang';
import WifiIcon from '../../../assets/wifi.png';

const OfflineBanner = () => {
  return (
    <View style={style.offlineBannerContainer}>
      <Text style={style.offlineText}>{localise('OFFLINE_WARNING_TITLE')}</Text>
      <Image source={WifiIcon} style={style.wifiIcon} />
    </View>
  );
};
const style = StyleSheet.create({
  offlineBannerContainer: {
    width: '100%',
    backgroundColor: color.ERROR_RED,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 5,
    paddingHorizontal: 10,
    elevation: 5,
  },
  offlineText: {
    color: color.WHITE,
    textAlign: 'right',
    fontSize: 12,
    paddingRight: 10,
  },
  wifiIcon:{
    height: 20,
    width: 20,
    resizeMode: 'contain',
  }
});
export default OfflineBanner;
