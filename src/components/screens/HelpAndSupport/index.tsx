import React from 'react';
import StandardPageLayout from '../../modules/StandardPageLayout';
import {localise} from '../../../services/lang/lang';
import {StyleSheet, Text} from 'react-native';
import * as color from '../../../constants/color';
import HowToUse from '../HowToUse';

const HelpAndSupport = ({navigation}) => {
  
  return (
    <StandardPageLayout title={localise('SUPPORT')} navigation={navigation}>
      
    </StandardPageLayout>
  );
};
const style = StyleSheet.create({
  sectionHeader: {
    color: color.TEXT_DARK,
    fontWeight: '500',
  },
});
export default HelpAndSupport;
