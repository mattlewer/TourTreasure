import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {toastConfig} from './components/modules/ErrorToastMessage';
import {RecoilRoot} from 'recoil';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import AppStartup from './components/screens/AppStartup';
import Router from './Router';

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <GestureHandlerRootView style={{flex: 1}}>
        <AppStartup>
          <Router />
          <Toast config={toastConfig} />
        </AppStartup>
      </GestureHandlerRootView>
    </RecoilRoot>
  );
}

export default App;
