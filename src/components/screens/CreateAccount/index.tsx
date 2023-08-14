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
import {Formik} from 'formik';

const CreateAccount = () => {
  const viewModel = useCreateAccountViewModel();

  return (
    <ScreenContainer scrollable>
      <View style={style.container}>
        <Formik
          initialValues={{username: '', email: '', password: ''}}
          validationSchema={viewModel.createAccountValidation}
          onSubmit={(values, formikHelpers) =>
            viewModel.onCreateAccount(
              values.username,
              values.email,
              values.password,
            )
          }>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <View style={style.iconHeaderContainer}>
                <IconWithBirds small />
                <Text style={[typography.HeaderReg, style.headerText]}>
                  {localise('WELCOME')}
                </Text>
              </View>
              <View style={style.inputSubmit}>
                <TextInputField
                  label={localise('USERNAME')}
                  value={values.username}
                  onChange={handleChange('username')}
                  onBlur={handleBlur('username')}
                  error={
                    touched.username && errors.username
                      ? errors.username
                      : undefined
                  }
                />
                <TextInputField
                  label={localise('EMAIL')}
                  value={values.email}
                  onChange={handleChange('email')}
                  onBlur={handleBlur('email')}
                  error={
                    touched.email && errors.email ? errors.email : undefined
                  }
                />
                <TextInputField
                  label={localise('PASSWORD')}
                  value={values.password}
                  onChange={handleChange('password')}
                  onBlur={handleBlur('password')}
                  secureEntry
                  error={
                    touched.password && errors.password
                      ? errors.password
                      : undefined
                  }
                />
              </View>
              <View style={style.buttonContainer}>
                <TextButton
                  type="primary"
                  text={localise('CREATE_ACCOUNT')}
                  onPress={handleSubmit}
                />
                <TextButton
                  type="secondary"
                  text={localise('SIGN_IN')}
                  onPress={viewModel.onSignIn}
                />
              </View>
            </>
          )}
        </Formik>
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
