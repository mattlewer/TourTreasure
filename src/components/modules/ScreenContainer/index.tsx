import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface ScreenContainerProps {
  children: React.ReactNode;
  stripPadding?: boolean;
  scrollable?: boolean;
}
const ScreenContainer = (props: ScreenContainerProps) => {
  let content = (
    <View style={[style.container, {padding: props.stripPadding ? 0 : 16}]}>
      {props.children}
    </View>
  );

  if (props.scrollable) {
    content = (
      <KeyboardAwareScrollView
        bounces={false}
        alwaysBounceVertical={false}
        keyboardShouldPersistTaps={'handled'}
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          {content}
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    );
  }

  return <>{content}</>;
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
export default ScreenContainer;
