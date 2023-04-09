import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RecoilRoot} from 'recoil';
import AppStartup from './components/screens/AppStartup';
import Router from './Router';

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <GestureHandlerRootView style={{flex: 1}}>
        <AppStartup>
          <Router />
        </AppStartup>
      </GestureHandlerRootView>
    </RecoilRoot>
  );
}

export default App;
