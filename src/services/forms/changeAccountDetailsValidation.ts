import {localise} from '../lang/lang';
import * as Yup from 'yup';

export const usernameValidation = Yup.object().shape({
  username: Yup.string()
    .required(localise('INVALID_USERNAME_REQUIRED'))
    .max(20, localise('INVALID_USERNAME_LENGTH')),
});


