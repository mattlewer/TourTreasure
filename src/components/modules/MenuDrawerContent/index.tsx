import React from 'react';
import {View, Image, StyleSheet, Text, Pressable, Linking} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {localise} from '../../../services/lang/lang';
import * as color from '../../../constants/color';
import Logo from '../../../assets/logo.png';
import useFirebaseDB from '../../../services/hooks/useFirebaseDB';
import {getPackageJson} from '../../../utils/getPackageJson';

const MenuDrawerContent = (props: DrawerContentComponentProps) => {
  const firebase = useFirebaseDB();

  const signOut = async () => {
    await firebase.onSignOut();
  };

  const packageJson = getPackageJson();

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={style.content}>
      <View style={style.header}>
        <Image source={Logo} style={style.logo} />
        <Text style={style.appName}>{localise('APP_NAME')}</Text>
        <Text style={style.appVersion}>v{packageJson['versionName']}</Text>
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
    position: 'relative',
    padding: 10,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  appVersion:{
    color: color.TEXT_DARK,
    position: 'absolute',
    bottom: 5,
    right: 10,
    fontWeight: '500',
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
