import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {typography} from '../../../constants/typography';
import {localise} from '../../../services/lang/lang';
import * as color from '../../../constants/color';
import TextButton from '../../modules/TextButton';
import TextInputField from '../../modules/TextInputField';
import ScreenContainer from '../../modules/ScreenContainer';
import IconWithBirds from '../../modules/IconWithBirds';
import useCreateAccountViewModel from '../../../services/viewModels/screens/useCreateAccountViewModel';

const CreateAccount = () => {
  const viewModel = useCreateAccountViewModel();

  return (
    <ScreenContainer scrollable>
      <View style={style.container}>
        <View style={style.iconHeaderContainer}>
          <IconWithBirds small />
          <Text style={[typography.HeaderReg, style.headerText]}>
            {localise('WELCOME')}
          </Text>
        </View>
        <View style={style.inputSubmit}>
          <TextInputField
            label={localise('USERNAME')}
            onChange={viewModel.setUsername}
          />
          <TextInputField
            label={localise('EMAIL')}
            onChange={viewModel.setEmail}
          />
          <TextInputField
            label={localise('PASSWORD')}
            onChange={viewModel.setPassword}
          />
        </View>
        <View style={style.buttonContainer}>
          <TextButton
            type="primary"
            text={localise('CREATE_ACCOUNT')}
            onPress={viewModel.onCreateAccount}
          />
          <TextButton
            type="secondary"
            text={localise('SIGN_IN')}
            onPress={viewModel.onSignIn}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: color.WHITE,
    marginTop: 40,
  },
  iconHeaderContainer: {
    width: '100%',
    alignItems: 'center',
  },
  headerText: {
    marginTop: 16,
    color: color.PRIMARY,
  },
  inputSubmit: {
    flexGrow: 1,
    marginTop: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  buttonContainer: {
    marginTop: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingBottom: 40,
    gap: 10,
  },
});
export default CreateAccount;
