import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import * as color from '../../../constants/color';
import {typography} from '../../../constants/typography';
import SearchIcon from '../../../assets/search_icon.png';

interface TextInputFieldProps {
  label: string;
  isSearch?: boolean;
  isCentered?: boolean;
  onChange: (text: string) => void;
  onSubmit: () => void;
}
const TextInputField = (props: TextInputFieldProps) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <View style={[style.container, {opacity: isPressed ? 0.7 : 1}]}>
      <Text
        style={[typography.BodyReg, style.inputLabel]}>
        {props.label}
      </Text>
      <View style={style.inputFieldContainer}>
        <TextInput
          style={style.inputField}
          onChangeText={props.onChange}
          onSubmitEditing={props.onSubmit}
        />
        {props.isSearch && (
          <Pressable
            style={style.searchBtnContainer}
            onPress={props.onSubmit}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}>
            <Image style={style.searchBtnIcon} source={SearchIcon} />
          </Pressable>
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
    width:'100%',
    marginBottom: 4,
    color: color.BLACK,
  },
  inputFieldContainer: {
    flexDirection: 'row',
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

  searchBtnContainer: {
    width: 48,
    height: 48,
    marginLeft: 10,
    borderRadius: 8,
    backgroundColor: color.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBtnIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
export default TextInputField;
