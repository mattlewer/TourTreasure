import {Text} from 'react-native';
import React from 'react';
import ScreenContainer from '../../modules/ScreenContainer';
import MenuToggleButton from '../../modules/MenuToggleButton';

const Profile = ({navigation}) => {
  return (
    <ScreenContainer>
      <MenuToggleButton navigation={navigation} />
      <Text style={{color: 'black'}}>Profile</Text>
    </ScreenContainer>
  );
};

export default Profile;
