import React from 'react';
import {View} from 'react-native';
import useAppStartupViewModel from '../../../services/viewModels/screens/useAppStartupViewModel';

interface AppStartupProps {
  children: React.ReactNode;
}
const AppStartup = (props: AppStartupProps) => {
  const viewModel = useAppStartupViewModel();
  return (
    <>
      {viewModel.loading ? (
        <View style={{flex: 1, width: '100%', backgroundColor: '#ffffff'}} />
      ) : (
        props.children
      )}
    </>
  );
};

export default AppStartup;
