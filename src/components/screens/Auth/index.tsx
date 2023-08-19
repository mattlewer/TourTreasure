import {ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import SplashScreenNoLogo from '../../../assets/splash_screen_no_logo.png';
import * as color from '../../../constants/color';
import ScreenContainer from '../../modules/ScreenContainer';
import CreateAccount from '../../modules/CreateAccount';
import useAuthViewModel from '../../../services/viewModels/screens/useAuthViewModel';
import SignIn from '../../modules/SignIn';
import {LoginState} from '../../../enums/loginState';

const Auth = () => {
  const viewModel = useAuthViewModel();
  return (
    <ScreenContainer scrollable stripPadding>
      <ImageBackground style={style.container} source={SplashScreenNoLogo}>
        {viewModel.stage === LoginState.CREATE_ACCOUNT ? (
          <CreateAccount
            onCreateAccount={viewModel.onCreateAccount}
            setStage={viewModel.setStage}
          />
        ) : (
          <SignIn onSignIn={viewModel.onSignIn} setStage={viewModel.setStage} />
        )}
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
