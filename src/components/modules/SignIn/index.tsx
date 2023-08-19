import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import {localise} from '../../../services/lang/lang';
import * as color from '../../../constants/color';
import TextButton from '../TextButton';
import TextInputField from '../TextInputField';
import IconWithBirds from '../IconWithBirds';
import useSignInViewModel from '../../../services/viewModels/screens/useSignInViewModel';
import {Formik} from 'formik';
import {LoginState} from '../../../enums/loginState';
import Animated, {SlideInLeft, SlideOutLeft} from 'react-native-reanimated';

interface SignInProps {
  onSignIn: (email: string, password: string) => void;
  setStage: (stage: LoginState) => void;
}
const SignIn = (props: SignInProps) => {
  const viewModel = useSignInViewModel();
  return (
    <Animated.View
      style={style.container}
      entering={SlideInLeft}
      exiting={SlideOutLeft}>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={viewModel.loginValidation}
        onSubmit={(values, formikHelpers) =>
          props.onSignIn(values.email, values.password)
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
            </View>
            <View style={style.inputSubmit}>
              <TextInputField
                label={localise('EMAIL')}
                value={values.email}
                onChange={handleChange('email')}
                onBlur={handleBlur('email')}
                error={touched.email && errors.email ? errors.email : undefined}
              />
              <TextInputField
                secureEntry
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
              <Pressable
                onPress={() => props.setStage(LoginState.CREATE_ACCOUNT)}
                style={style.textButton}>
                <Text style={{color: color.TEXT_DARK}}>
                  {localise('GUIDE_SIGN_UP')}
                  <Text style={{color: color.PRIMARY}}>
                    {' '}
                    {localise('GUIDE_SIGN_UP_LINK')}
                  </Text>
                </Text>
              </Pressable>
            </View>
          </>
        )}
      </Formik>
    </Animated.View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: color.WHITE,
    width: '90%',
    padding: 10,
    borderRadius: 8,
    elevation: 10,
  },
  iconHeaderContainer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
  },
  inputSubmit: {
    flexGrow: 1,
    marginTop: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingBottom: 10,
  },
  buttonContainer: {
    marginTop: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: 5,
  },
  textButton: {
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
});
export default SignIn;
