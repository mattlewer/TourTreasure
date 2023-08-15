import {localise} from '../../lang/lang';
import * as Yup from 'yup';
import {EMAIL_REGX} from '../../../constants/emailRegex';

const useCreateAccountViewModel = () => {

  const createAccountValidation = Yup.object().shape({
    username: Yup.string()
      .required(localise('INVALID_USERNAME_REQUIRED'))
      .max(20, localise('INVALID_USERNAME_DESC')),
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

  return {
    createAccountValidation,
  };
};

export default useCreateAccountViewModel;
