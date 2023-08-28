import React from 'react';
import {Pressable, Image, StyleSheet} from 'react-native';
import HamburgerLight from '../../../assets/hamburger_light.png';
import HamburgerPrimary from '../../../assets/hamburger_primary.png';
import {DrawerActions} from '@react-navigation/native';

interface MenuToggleButtonProps {
  light?: boolean;
  navigation: any;
}
const MenuToggleButton = (props: MenuToggleButtonProps) => {
  return (
    <Pressable
      style={style.iconContainer}
      onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}>
      <Image
        source={props.light ? HamburgerLight : HamburgerPrimary}
        style={style.icon}
      />
    </Pressable>
  );
};
const style = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 900,
    top: 10,
    right: 10,
  },
  icon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
});
export default MenuToggleButton;
