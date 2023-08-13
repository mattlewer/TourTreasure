import {useState} from 'react';
import {CreateAccoundStackParams} from '../../../navigation/CreateAccountStackNav';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {CreateAccount} from '../../auth';
import {validateText} from '../../validateText';
import {onSignUpFailure, onSignUpFailurePassword} from '../../toasts';

const useCreateAccountViewModel = () => {
  const navigation =
    useNavigation<StackNavigationProp<CreateAccoundStackParams>>();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onCreateAccount = async () => {
    if (password.length < 8) {
      onSignUpFailurePassword();
      return;
    }
    if (!validateText(username) || !validateText(email)) {
      onSignUpFailure();
      return;
    }
    const wasSuccess = await CreateAccount(username, email, password);
    if (wasSuccess) {
      navigation.navigate('HowToUse', {name: username});
    }
  };

  const onSignIn = () => {
    navigation.navigate('SignIn');
  };

  return {
    email,
    setEmail,
    setUsername,
    setPassword,
    onSignIn,
    onCreateAccount,
  };
};

export default useCreateAccountViewModel;
