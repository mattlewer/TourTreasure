import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {generateInitials} from '../../../services/generateInitals';
import {localise} from '../../../services/lang/lang';
import * as color from '../../../constants/color';

interface UserBannerProps {
  name: string;
}

const UserBanner = (props: UserBannerProps) => {
  return (
    <View style={style.welcomeTextContainer}>
      <View style={style.row}>
        <View style={style.initialsContainer}>
          <Text style={style.initialsText}>{generateInitials(props.name)}</Text>
        </View>
        <View>
          <Text style={style.welcomeText}>{localise('WELCOME_USER')}</Text>
          <Text style={style.usernameText}>{props.name}hew Lewer</Text>
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  welcomeTextContainer: {
    paddingVertical: 50,
    paddingLeft: 20,
    alignSelf: 'flex-start',
  },
  initialsContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: color.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  initialsText: {
    color: color.WHITE,
  },
  welcomeText: {
    color: color.TEXT_DARK,
    fontSize: 16,
  },
  usernameText: {
    color: color.TEXT_DARK,
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 24,
    alignSelf: 'flex-start',
  },
});
export default UserBanner;
