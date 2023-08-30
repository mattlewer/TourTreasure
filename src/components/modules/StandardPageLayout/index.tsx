import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MenuToggleButton from '../MenuToggleButton';
import * as color from '../../../constants/color';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface StandardPageLayoutProps {
  navigation: any;
  title: string;
  children: React.ReactNode;
  preventScroll?: boolean;
}
const StandardPageLayout = (props: StandardPageLayoutProps) => {
  const container = !props.preventScroll ? (
    <KeyboardAwareScrollView
      bounces={false}
      alwaysBounceVertical={false}
      overScrollMode={'never'}
      keyboardShouldPersistTaps={'handled'}
      style={style.inner}
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      {props.children}
    </KeyboardAwareScrollView>
  ) : (
    <View style={style.inner}>{props.children}</View>
  );
  return (
    <View style={{flex: 1}}>
      <View style={style.header}>
        <Text style={style.headerText}>{props.title}</Text>
      </View>
      <MenuToggleButton navigation={props.navigation} light />
      {container}
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    backgroundColor: color.PRIMARY,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 50,
  },
  headerText: {
    color: color.WHITE,
    fontWeight: '600',
    fontSize: 24,
  },
  inner: {
    width: '100%',
    paddingHorizontal: 20,
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: color.WHITE,
    marginTop: -15,
  },
});

export default StandardPageLayout;
