import React from 'react';
import {Text} from 'react-native';
import useAppStartupViewModel from '../../../services/viewModels/screens/useAppStartupViewModel';

interface AppStartupProps {
  children: React.ReactNode;
}
const AppStartup = (props: AppStartupProps) => {
  const viewModel = useAppStartupViewModel();
  return (
    <>
      {viewModel.loading ? <Text>LOADING...</Text> : props.children}
    </>
  );
};

export default AppStartup;
