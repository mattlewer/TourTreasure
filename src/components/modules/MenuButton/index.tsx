import React from 'react';
import {Pressable, Image, StyleSheet} from 'react-native';
import Hamburger from '../../../assets/hamburger.png';
import {DrawerActions} from '@react-navigation/native';

interface MenuButtonProps {
  navigation: any;
}
const MenuButton = (props: MenuButtonProps) => {
  return (
    <Pressable
      style={style.iconContainer}
      onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}>
      <Image source={Hamburger} style={style.icon} />
    </Pressable>
  );
};
const style = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    zIndex: 100,
    top: 20,
    right: 20,
  },
  icon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
});
export default MenuButton;
