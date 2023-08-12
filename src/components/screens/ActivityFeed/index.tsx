import {Text} from 'react-native';
import React from 'react';
import ScreenContainer from '../../modules/ScreenContainer';
import MenuToggleButton from '../../modules/MenuToggleButton';

const ActivityFeed = ({navigation}) => {
  return (
    <ScreenContainer>
      <MenuToggleButton navigation={navigation} />
      <Text style={{color: 'black'}}>Activiy Feed</Text>
    </ScreenContainer>
  );
};

export default ActivityFeed;
