import {ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import SplashScreen from '../../../assets/splash_screen.png';
import * as color from '../../../constants/color';
import ScreenContainer from '../../modules/ScreenContainer';
import CreateAccount from '../CreateAccount';
import useAuthViewModel from '../../../services/viewModels/screens/useAuthViewModel';
import SignIn from '../SignIn';
import {LoginState} from '../../../enums/loginState';

const Auth = () => {
  const viewModel = useAuthViewModel();
  return (
    <ScreenContainer scrollable stripPadding>
      <ImageBackground style={style.container} source={SplashScreen}>
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
