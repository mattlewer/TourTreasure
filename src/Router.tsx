import React from 'react';
import {userState} from './state/userState';
import {useRecoilState} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';
import AppStackNav from './navigation/AppStackNav';
import CreateAccountStackNav from './navigation/CreateAccountStackNav';

const Router = () => {
  const [user] = useRecoilState(userState);
  return (
    <NavigationContainer>
      {user ? <AppStackNav /> : <CreateAccountStackNav />}
    </NavigationContainer>
  );
};

export default Router;
