import {useState} from 'react';
import {CreateAccoundStackParams} from '../../../navigation/CreateAccountStackNav';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {CreateAccount} from '../../auth';
import { localise } from '../../lang/lang';
import * as Yup from 'yup';
import {EMAIL_REGX} from '../../../constants/emailRegex';

const useCreateAccountViewModel = () => {
  const navigation =
    useNavigation<StackNavigationProp<CreateAccoundStackParams>>();

  const createAccountValidation = Yup.object().shape({
    username: Yup.string().required().max(20, localise('INVALID_USERNAME_DESC')),
    email: Yup.string()
      .required(localise('LOGIN_EMAIL_REQUIRED'))
      .matches(EMAIL_REGX, localise('LOGIN_EMAIL_INVALID')),
    password: Yup.string()
      .required(localise('LOGIN_PASSWORD_REQUIRED'))
      .min(8, localise('LOGIN_PASSWORD_LENGTH'))
      .matches(/[0-9]/, localise('LOGIN_PASSWORD_NUMBERS'))
      .matches(/[a-z]/, localise('LOGIN_PASSWORD_UPPER_LOWER'))
      .matches(/[A-Z]/, localise('LOGIN_PASSWORD_UPPER_LOWER')),
  });

  const onCreateAccount = async (username: string, email: string, password: string) => {
    const wasSuccess = await CreateAccount(username, email, password);
    if (wasSuccess) {
      navigation.navigate('HowToUse', {name: username});
    }
  };

  const onSignIn = () => {
    navigation.navigate('SignIn');
  };

  return {
    createAccountValidation,
    onSignIn,
    onCreateAccount,
  };
};

export default useCreateAccountViewModel;
