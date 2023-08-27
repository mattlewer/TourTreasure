import React from 'react';
import {View} from 'react-native';
import useAppStartupViewModel from '../../../services/viewModels/screens/useAppStartupViewModel';
import UpdateModal from '../../modules/UpdateModal';

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
      {viewModel.hasUpdate && (
        <UpdateModal versionAvailable={viewModel.hasUpdate} />
      )}
    </>
  );
};

export default AppStartup;
