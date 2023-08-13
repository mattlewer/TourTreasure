import 'react-native-gesture-handler';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {toastConfig} from './components/modules/ErrorToastConfig';
import {RecoilRoot} from 'recoil';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import Router from './Router';
import AppStartup from './components/screens/AppStartup';
import OfflineBanner from './components/modules/OfflineBanner';
import useOnlineStatus from './services/hooks/useOnlineStatus';

function App(): JSX.Element {
  const onlineStatus = useOnlineStatus();
  return (
    <RecoilRoot>
      <GestureHandlerRootView style={{flex: 1}}>
        <AppStartup>
          {!onlineStatus.hasNetworkConnectivity && <OfflineBanner />}
          <Router />
          <Toast config={toastConfig} />
        </AppStartup>
      </GestureHandlerRootView>
    </RecoilRoot>
  );
}

export default App;
