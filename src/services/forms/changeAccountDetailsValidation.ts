import {EMAIL_REGX} from '../../constants/emailRegex';
import {localise} from '../lang/lang';
import * as Yup from 'yup';

export const usernameValidation = Yup.object().shape({
  username: Yup.string()
    .required(localise('INVALID_USERNAME_REQUIRED'))
    .max(20, localise('INVALID_USERNAME_LENGTH')),
});

export const emailValidation = Yup.object().shape({
  email: Yup.string()
    .required(localise('LOGIN_EMAIL_REQUIRED'))
    .matches(EMAIL_REGX, localise('LOGIN_EMAIL_INVALID')),
});
