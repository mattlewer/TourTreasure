import {CreateAccoundStackParams} from '../../../navigation/CreateAccountStackNav';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {SignIn} from '../../auth';
import * as Yup from 'yup';
import {localise} from '../../lang/lang';
import {EMAIL_REGX} from '../../../constants/emailRegex';

const useSignInViewModel = () => {
  const navigation =
    useNavigation<StackNavigationProp<CreateAccoundStackParams>>();

  const loginValidation = Yup.object().shape({
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

  const onSignIn = async (email: string, password: string) => {
    await SignIn(email, password);
  };

  const onCreateAccount = () => {
    navigation.navigate('CreateAccount');
  };

  return {
    loginValidation,
    onSignIn,
    onCreateAccount,
  };
};

export default useSignInViewModel;
