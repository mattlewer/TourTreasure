import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import Animated, {SlideInDown, SlideOutDown} from 'react-native-reanimated';
import * as color from '../../../constants/color';
import {localise} from '../../../services/lang/lang';
import TextInputField from '../TextInputField';
import {typography} from '../../../constants/typography';
import Close from '../../../assets/close.png';

interface ConfirmDeleteAccountProps {
  setOpen: (open: boolean) => void;
  onConfirm: (password: string) => void;
}
const ConfirmDeleteAccount = (props: ConfirmDeleteAccountProps) => {
  const [password, setPassword] = useState('');
  return (
    <View style={style.outer}>
      <Animated.View
        style={style.container}
        entering={SlideInDown}
        exiting={SlideOutDown}>
        <Pressable onPress={() => props.setOpen(false)} style={style.closeBtn}>
          <Image source={Close} style={style.closeIcon} />
        </Pressable>
        <Text style={[typography.HeaderReg, style.areYouSureText]}>
          {localise('DELETE_ACCOUNT_POPUP_TITLE')}
        </Text>
        <Text style={[typography.BodyReg, style.descText]}>
          {localise('DELETE_ACCOUNT_POPUP_DESC')}
        </Text>
        <TextInputField
          label={localise('ENTER_YOUR_PASSWORD')}
          value={password}
          onChange={setPassword}
          secureEntry
        />
        <Pressable
          style={style.deleteAccountContainer}
          onPress={() => props.onConfirm(password)}>
          <Text style={style.deleteAccountText}>
            {localise('DELETE_ACCOUNT')}
          </Text>
        </Pressable>
      </Animated.View>
    </View>
  );
};

const style = StyleSheet.create({
  outer: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 100000,
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.BLACK + '66',
  },
  container: {
    position: 'relative',
    backgroundColor: color.WHITE,
    width: '90%',
    padding: 10,
    paddingTop: 20,
    borderRadius: 8,
    elevation: 10,
  },
  areYouSureText: {
    color: color.TEXT_DARK,
    fontWeight: '500',
    textAlign: 'center',
    paddingBottom: 15,
  },
  descText: {
    color: color.TEXT_DARK,
    fontWeight: '500',
    textAlign: 'center',
    paddingBottom: 20,
  },
  deleteAccountContainer: {
    backgroundColor: color.ERROR_RED,
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 5,
  },

  deleteAccountText: {
    fontWeight: '500',
    color: color.WHITE,
  },
  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1000,
  },
  closeIcon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
});

export default ConfirmDeleteAccount;
