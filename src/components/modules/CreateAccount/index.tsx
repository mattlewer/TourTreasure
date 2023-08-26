import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import {localise} from '../../../services/lang/lang';
import * as color from '../../../constants/color';
import TextButton from '../TextButton';
import TextInputField from '../TextInputField';
import IconWithBirds from '../IconWithBirds';
import {Formik} from 'formik';
import {LoginState} from '../../../enums/loginState';
import Animated, {SlideInRight, SlideOutRight} from 'react-native-reanimated';
import createAccountValidation from '../../../services/forms/createAccountValidation';

interface CreateAccountProps {
  onCreateAccount: (username: string, email: string, password: string) => void;
  setStage: (stage: LoginState) => void;
}
const CreateAccount = (props: CreateAccountProps) => {
  return (
    <Animated.View
      style={style.container}
      entering={SlideInRight}
      exiting={SlideOutRight}>
      <Formik
        initialValues={{username: '', email: '', password: ''}}
        validationSchema={createAccountValidation}
        onSubmit={(values, formikHelpers) =>
          props.onCreateAccount(values.username, values.email, values.password)
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
                error={touched.email && errors.email ? errors.email : undefined}
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
              <Pressable
                onPress={() => props.setStage(LoginState.SIGN_IN)}
                style={style.textButton}>
                <Text style={{color: color.TEXT_DARK}}>
                  {localise('GUIDE_SIGN_IN')}
                  <Text style={{color: color.PRIMARY}}>
                    {' '}
                    {localise('GUIDE_SIGN_IN_LINK')}
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
export default CreateAccount;
