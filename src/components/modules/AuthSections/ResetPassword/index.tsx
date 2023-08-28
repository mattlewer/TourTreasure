import React from 'react';
import {View, StyleSheet, Text, Pressable, Image} from 'react-native';
import {localise} from '../../../../services/lang/lang';
import * as color from '../../../../constants/color';
import TextButton from '../../TextButton';
import TextInputField from '../../TextInputField';
import IconWithBirds from '../../IconWithBirds';
import {Formik} from 'formik';
import {LoginState} from '../../../../enums/loginState';
import Animated, {SlideInRight, SlideOutRight} from 'react-native-reanimated';
import {emailValidation} from '../../../../services/forms/changeAccountDetailsValidation';
import Close from '../../../../assets/close.png';

interface SignInProps {
  onSendResetMail: (email: string) => void;
  setStage: (stage: LoginState) => void;
}
const ResetPassword = (props: SignInProps) => {
  return (
    <Animated.View
      style={style.container}
      entering={SlideInRight}
      exiting={SlideOutRight}>
      <Pressable
        onPress={() => props.setStage(LoginState.SIGN_IN)}
        style={style.closeBtn}>
        <Image source={Close} style={style.closeIcon} />
      </Pressable>
      <Formik
        initialValues={{email: ''}}
        validationSchema={emailValidation}
        onSubmit={(values, formikHelpers) => {
          props.onSendResetMail(values.email);
          props.setStage(LoginState.SIGN_IN);
        }}>
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
            </View>
            <View style={style.buttonContainer}>
              <TextButton
                type="primary"
                text={localise('SEND_EMAIL')}
                onPress={handleSubmit}
              />
            </View>
          </>
        )}
      </Formik>
    </Animated.View>
  );
};

const style = StyleSheet.create({
  container: {
    position: 'relative',
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

  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1000,
  },
  closeIcon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
});
export default ResetPassword;
