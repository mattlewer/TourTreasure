import React, {useEffect} from 'react';
import {localise} from './services/lang/lang';
import {userState} from './state/userState';
import {useRecoilState} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';
import AppStackNav from './navigation/AppStackNav';
import CreateAccountStackNav from './navigation/CreateAccountStackNav';
import useOnlineStatus from './services/hooks/useOnlineStatus';
import Toast from 'react-native-toast-message';

const Router = () => {
  const [user] = useRecoilState(userState);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    !onlineStatus.hasNetworkConnectivity &&
      Toast.show({
        type: 'error',
        text1: localise('OFFLINE_WARNING_TITLE'),
        text2: localise('OFFLINE_WARNING_DESC'),
        position: 'bottom',
        bottomOffset: 100,
        visibilityTime: 6000,
        onPress() {
          Toast.hide();
        },
      });
  }, [onlineStatus.hasNetworkConnectivity]);

  return (
    <NavigationContainer>
      {user ? <AppStackNav /> : <CreateAccountStackNav />}
    </NavigationContainer>
  );
};

export default Router;
