import * as Yup from 'yup';
import {localise} from '../lang/lang';
import {EMAIL_REGX} from '../../constants/emailRegex';

const signInValidation = Yup.object().shape({
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

export default signInValidation;
