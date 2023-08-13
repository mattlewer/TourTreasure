import {useState} from 'react';
import {CreateAccoundStackParams} from '../../../navigation/CreateAccountStackNav';
import {onLogInFailure} from '../../toasts';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {SignIn} from '../../auth';

const useSignInViewModel = () => {
  const navigation =
    useNavigation<StackNavigationProp<CreateAccoundStackParams>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignIn = async () => {
    if (email.length < 6 || password.length < 8) {
      onLogInFailure();
    } else {
      await SignIn(email, password);
    }
  };

  const onCreateAccount = () => {
    navigation.navigate('CreateAccount');
  };

  return {
    email,
    setEmail,
    setPassword,
    onSignIn,
    onCreateAccount,
  };
};

export default useSignInViewModel;
