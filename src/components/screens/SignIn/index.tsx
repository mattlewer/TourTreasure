import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {typography} from '../../../constants/typography';
import {localise} from '../../../services/lang/lang';
import * as color from '../../../constants/color';
import TextButton from '../../modules/TextButton';
import TextInputField from '../../modules/TextInputField';
import ScreenContainer from '../../modules/ScreenContainer';
import IconWithBirds from '../../modules/IconWithBirds';
import useSignInViewModel from '../../../services/viewModels/screens/useSignInViewModel';
import {Formik} from 'formik';

const SignIn = () => {
  const viewModel = useSignInViewModel();
  return (
    <ScreenContainer scrollable>
      <View style={style.container}>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={viewModel.loginValidation}
          onSubmit={(values, formikHelpers) =>
            viewModel.onSignIn(values.email, values.password)
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
                <IconWithBirds />
                <Text style={[typography.HeaderReg, style.headerText]}>
                  {localise('WELCOME')}
                </Text>
              </View>
              <View style={style.inputSubmit}>
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
                  text={localise('SIGN_IN')}
                  onPress={handleSubmit}
                />
                <TextButton
                  type="secondary"
                  text={localise('CREATE_ACCOUNT')}
                  onPress={viewModel.onCreateAccount}
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
export default SignIn;
