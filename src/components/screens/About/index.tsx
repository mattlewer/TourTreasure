import React from 'react';
import StandardPageLayout from '../../modules/StandardPageLayout';
import {localise} from '../../../services/lang/lang';
import {StyleSheet, Text, View} from 'react-native';
import {typography} from '../../../constants/typography';
import * as color from '../../../constants/color';
import IconWithBirds from '../../modules/IconWithBirds';

const About = ({navigation}) => {
  return (
    <StandardPageLayout title={localise('ABOUT_US')} navigation={navigation}>
      <View style={style.iconHeaderContainer}>
        <IconWithBirds small />
        <Text style={[typography.HeaderReg, style.appName]}>
          {localise('APP_NAME')}
        </Text>
      </View>
      <View style={style.content}>
        <Text style={style.sectionHeader}>{localise('WHY')}</Text>
        <Text style={style.sectionText}>
          {localise('ABOUT_TOUR_TREASURE_WHY')}
        </Text>
        <Text style={style.sectionHeader}>{localise('WHAT')}</Text>
        <Text style={style.sectionText}>
          {localise('ABOUT_TOUR_TREASURE_WHAT')}
        </Text>
        <Text style={style.sectionHeader}>{localise('HOW')}</Text>
        <Text style={style.sectionText}>
          {localise('ABOUT_TOUR_TREASURE_HOW')}
        </Text>
      </View>
    </StandardPageLayout>
  );
};
const style = StyleSheet.create({
  appName: {
    color: color.PRIMARY,
    fontWeight: '500',
    paddingVertical: 10,
  },
  sectionHeader: {
    color: color.TEXT_DARK,
    fontWeight: '500',
  },
  sectionText: {
    color: color.TEXT_DARK,
  },
  iconHeaderContainer: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 20,
  },
  content:{
    flex: 1,
    paddingVertical: 30,
  }
});
export default About;
