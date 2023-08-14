import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import * as color from '../../../constants/color';
import {typography} from '../../../constants/typography';
import ErrorIcon from '../../../assets/error_icon.png';

interface TextInputFieldProps {
  label: string;
  value: string;
  isSearch?: boolean;
  isCentered?: boolean;
  error?: string;
  onChange: (text: string) => void;
  onSubmit?: () => void;
  onBlur?: (e: any) => void;
}
const TextInputField = (props: TextInputFieldProps) => {
  return (
    <View style={style.container}>
      <Text style={[typography.BodyReg, style.inputLabel]}>{props.label}</Text>
      <View style={style.inputFieldContainer}>
        <TextInput
          value={props.value}
          onBlur={props.onBlur}
          maxLength={30}
          style={style.inputField}
          onChangeText={props.onChange}
          onSubmitEditing={props.onSubmit}
        />
        {props.error ? (
          <View style={style.errorMessageContainer}>
            <Image source={ErrorIcon} style={style.errorIcon} />
            <Text style={style.errorText}>{props.error}</Text>
          </View>
        ) : (
          <View style={style.noErrorMessage} />
        )}
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    zIndex: 10,
    width: '100%',
  },
  inputLabel: {
    width: '100%',
    marginBottom: 4,
    color: color.TEXT_DARK,
  },
  inputFieldContainer: {
    flexDirection: 'column',
    width: '100%',
  },
  inputField: {
    color: color.PRIMARY,
    backgroundColor: color.WHITE,
    height: 48,
    borderColor: color.PRIMARY,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    flexGrow: 1,
  },
  errorMessageContainer: {
    paddingTop: 2,
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  errorIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  errorText: {
    paddingLeft: 5,
    color: color.ERROR_RED,
    fontSize: 12,
    fontWeight: '400',
  },
  noErrorMessage: {
    height: 17,
  },
});
export default TextInputField;
