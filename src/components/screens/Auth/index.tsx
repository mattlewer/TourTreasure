import {ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import SplashScreenNoLogo from '../../../assets/splash_screen_no_logo.png';
import * as color from '../../../constants/color';
import ScreenContainer from '../../modules/ScreenContainer';
import CreateAccount from '../../modules/AuthSections/CreateAccount';
import useAuthViewModel from '../../../services/viewModels/screens/useAuthViewModel';
import SignIn from '../../modules/AuthSections/SignIn';
import {LoginState} from '../../../enums/loginState';
import LoadingOverlay from '../../modules/LoadingOverlay';
import ResetPassword from '../../modules/AuthSections/ResetPassword';

const Auth = () => {
  const viewModel = useAuthViewModel();

  const renderScene = () => {
    switch (viewModel.stage) {
      case LoginState.CREATE_ACCOUNT:
        return (
          <CreateAccount
            onCreateAccount={viewModel.onCreateAccount}
            setStage={viewModel.setStage}
          />
        );
      case LoginState.SIGN_IN:
        return (
          <SignIn onSignIn={viewModel.onSignIn} setStage={viewModel.setStage} />
        );
      case LoginState.RESET_PASSWORD:
        return (
          <ResetPassword
            onSendResetMail={viewModel.onSendResetEmail}
            setStage={viewModel.setStage}
          />
        );
    }
  };

  return (
    <ScreenContainer scrollable stripPadding>
      {viewModel.isLoading && <LoadingOverlay />}
      <ImageBackground style={style.container} source={SplashScreenNoLogo}>
        {renderScene()}
      </ImageBackground>
    </ScreenContainer>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.WHITE,
  },
});
export default Auth;
