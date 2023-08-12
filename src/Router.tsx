import React from 'react';
import {userState} from './state/userState';
import {useRecoilValue} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';
import CreateAccountStackNav from './navigation/CreateAccountStackNav';
import MenuDrawer from './navigation/MenuDrawer';

const Router = () => {
  const user = useRecoilValue(userState);
  return (
    <NavigationContainer>
      {user ? <MenuDrawer /> : <CreateAccountStackNav />}
    </NavigationContainer>
  );
};

export default Router;
