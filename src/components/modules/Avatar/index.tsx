import {Text, StyleSheet, View} from 'react-native';
import React from 'react';
import {generateInitials} from '../../../services/generateInitals';
import * as color from '../../../constants/color';

interface AvatarProps {
  name: string;
}

const Avatar = (props: AvatarProps) => {
  return (
    <View style={style.initialsContainer}>
      <Text style={style.initialsText}>{generateInitials(props.name)}</Text>
    </View>
  );
};
const style = StyleSheet.create({
  initialsContainer: {
    width: 50,
    height: 50,
    borderRadius: 35,
    backgroundColor: color.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  initialsText: {
    color: color.PRIMARY,
    fontWeight: '600',
  },
});
export default Avatar;
