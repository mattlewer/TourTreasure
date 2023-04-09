import {View, StyleSheet, Text} from 'react-native';
import {typography} from '../../../constants/typography';
import {localise} from '../../../services/lang/lang';
import * as color from '../../../constants/color';
import React from 'react';
import TextButton from '../../modules/TextButton';
import useCreateAccountViewModel from '../../../services/viewModels/screens/useCreateAccountViewModel';
import TextInputField from '../../modules/TextInputField';
import ScreenContainer from '../../modules/ScreenContainer';
import IconWithBirds from '../../modules/IconWithBirds';

const CreateAccount = () => {
  const viewModel = useCreateAccountViewModel();

  return (
    <ScreenContainer scrollable>
      <View style={style.container}>
        <View style={style.iconHeaderContainer}>
          <IconWithBirds />
          <Text style={[typography.HeaderReg, style.headerText]}>
            {localise('WELCOME')}
          </Text>
          <Text style={[typography.BodyReg]}>
            {localise('ENTER_USERNAME_TO_START')}
          </Text>
        </View>
        <View style={style.inputSubmit}>
          <TextInputField
            label={localise('USERNAME')}
            onChange={viewModel.setUsername}
            onSubmit={viewModel.onSetUsername}
          />
          <View style={style.buttonContainer}>
            <TextButton
              type="primary"
              text={localise('GET_STARTED')}
              onPress={viewModel.onSetUsername}
            />
          </View>
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
    backgroundColor: '#fff',
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
    flex: 1,
    marginTop: 60,
    width: '100%',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
export default CreateAccount;
