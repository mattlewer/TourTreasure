import React, {useState} from 'react';
import * as color from '../../../constants/color';
import {Text, Pressable, StyleSheet} from 'react-native';

interface TextButtonProps {
  onPress: () => void;
  disabled?: boolean;
  text: string;
  type: 'primary' | 'secondary';
}
const TextButton = (props: TextButtonProps) => {
  const [pressed, setPressed] = useState<boolean>(false);

  let buttonStyle;
  let textStyle;
  if (props.type === 'primary') {
    buttonStyle = {
      backgroundColor: color.PRIMARY,
    };
    textStyle = {
      color: color.WHITE,
    };
  } else {
    buttonStyle = {
      borderWidth: 1,
      borderColor: color.PRIMARY,
      backgroundColor: color.WHITE,
    };
    textStyle = {
      color: color.PRIMARY,
    };
  }

  return (
    <Pressable
      onPress={props.onPress}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      disabled={props.disabled}
      style={[style.buttonContainer, buttonStyle, {opacity: pressed ? 0.7 : 1}]}>
      <Text style={textStyle}>{props.text}</Text>
    </Pressable>
  );
};
const style = StyleSheet.create({
  buttonContainer: {
    elevation: 5,
    shadowOffset: {width: 0, height: 2},
    shadowColor: color.BLACK,
    shadowOpacity: 1,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderRadius: 8,
    margin: 3,
  },
});

export default TextButton;
