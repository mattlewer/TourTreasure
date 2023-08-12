import {Text} from 'react-native';
import React from 'react';
import ScreenContainer from '../../modules/ScreenContainer';
import MenuToggleButton from '../../modules/MenuToggleButton';

const About = ({navigation}) => {
  return (
    <ScreenContainer>
      <MenuToggleButton navigation={navigation} />
      <Text style={{color: 'black'}}>About</Text>
    </ScreenContainer>
  );
};

export default About;
