import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ScreenContainer from '../ScreenContainer';
import MenuToggleButton from '../MenuToggleButton';
import * as color from '../../../constants/color';

interface StandardPageLayoutProps {
  navigation: any;
  title: string;
  children: React.ReactNode;
}
const StandardPageLayout = (props: StandardPageLayoutProps) => {
  return (
    <ScreenContainer stripPadding>
      <View style={style.header}>
        <Text style={style.headerText}>{props.title}</Text>
      </View>
      <MenuToggleButton navigation={props.navigation} light />
      <View style={style.inner}>{props.children}</View>
    </ScreenContainer>
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
