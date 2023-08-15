import {CreateAccount, SignIn} from '../../auth';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {CreateAccoundStackParams} from '../../../navigation/CreateAccountStackNav';
import {LoginState} from '../../../enums/loginState';
import {useState} from 'react';

const useAuthViewModel = () => {
  const navigation =
    useNavigation<StackNavigationProp<CreateAccoundStackParams>>();
  const [stage, setStage] = useState(LoginState.SIGN_IN);

  const onCreateAccount = async (
    username: string,
    email: string,
    password: string,
  ) => {
    const wasSuccess = await CreateAccount(username, email, password);
    if (wasSuccess) {
      navigation.navigate('HowToUse', {name: username});
    }
  };

  const onSignIn = async (email: string, password: string) => {
    await SignIn(email, password);
  };

  return {
    stage,
    onCreateAccount,
    onSignIn,
    setStage,
  };
};

export default useAuthViewModel;
