import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import React from 'react';
import SearchIcon from '../../../assets/search_dark.png';
import * as color from '../../../constants/color';

interface PlaceSearchFieldProps {
  onSearch: () => void;
  onChange: (text: string) => void;
}
const PlaceSearchField = (props: PlaceSearchFieldProps) => {
  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        onSubmitEditing={props.onSearch}
        onChangeText={props.onChange}
      />
      <Image source={SearchIcon} style={style.icon} />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
  },
  input: {
    backgroundColor: color.WHITE,
    height: 48,
    borderRadius: 20,
    paddingLeft: 45,
    color: color.TEXT_DARK,
  },
  icon: {
    position: 'absolute',
    top: 15,
    left: 15,
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
export default PlaceSearchField;
