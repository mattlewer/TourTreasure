import React from 'react';
import {Text} from 'react-native';
import ScreenContainer from '../../modules/ScreenContainer';
import MenuToggleButton from '../../modules/MenuToggleButton';

const SupportAndFeedback = ({navigation}) => {
  return (
    <ScreenContainer>
      <MenuToggleButton navigation={navigation} />
      <Text style={{color: 'black'}}>Feedback</Text>
    </ScreenContainer>
  );
};

export default SupportAndFeedback;
