import React from 'react';
import {View, Image, StyleSheet, Text, Pressable} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth';
import {localise} from '../../../services/lang/lang';
import * as color from '../../../constants/color';
import Logo from '../../../assets/logo.png';
import {useResetRecoilState} from 'recoil';
import {userState} from '../../../state/userState';

const MenuDrawerContent = (props: DrawerContentComponentProps) => {
  const resetUserData = useResetRecoilState(userState);

  const signOut = async () => {
    await auth().signOut();
    resetUserData();
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={style.content}>
      <View style={style.header}>
        <Image source={Logo} style={style.logo} />
        <Text style={style.appName}>{localise('APP_NAME')}</Text>
      </View>
      <DrawerItemList {...props} />
      <View style={style.buffer} />
      <Pressable style={style.signOutContainer} onPress={signOut}>
        <Text style={style.signOutText}>{localise('SIGN_OUT')}</Text>
      </Pressable>
    </DrawerContentScrollView>
  );
};

const style = StyleSheet.create({
  content: {
    flex: 1,
  },
  header: {
    padding: 10,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'contain',
  },
  appName: {
    paddingLeft: 10,
    color: color.PRIMARY,
    fontSize: 20,
    fontWeight: '600',
  },
  buffer: {
    flex: 1,
  },
  signOutContainer: {
    height: 50,
    backgroundColor: color.ERROR_RED,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  signOutText: {
    color: color.WHITE,
    fontWeight: '600',
  },
});

export default MenuDrawerContent;
