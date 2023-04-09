import {View, Image, StyleSheet} from 'react-native';
import * as color from '../../../constants/color';
import React from 'react';
import SearchIcon from '../../../assets/search_icon.png'

const SearchButton = () => {
  return (
    <View style={style.container}>
      <Image style={style.icon} source={SearchIcon} />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: color.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default SearchButton;
