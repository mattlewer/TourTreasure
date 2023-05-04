import {useState} from 'react';
import {CreateAccoundStackParams} from '../../../navigation/CreateAccountStackNav';
import {invalidUsernameToast} from '../../../components/modules/ErrorToasts';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

const useCreateAccountViewModel = () => {
  const navigation =
    useNavigation<StackNavigationProp<CreateAccoundStackParams>>();
  const [username, setUsername] = useState('');

  const onSetUsername = () => {
    if (validateUserName(username)) {
      navigation.navigate('HowToUse', {name: username});
    } else {
      invalidUsernameToast();
    }
  };

  const validateUserName = (name: string): boolean => {
    const noSymbols = name.replace(/[A-Za-z]/g, '').length === 0;
    const nameNoSymbolsNoNumbers = name.replace(/[^A-Za-z]/g, '');
    const nameNoSpace = name.replace(/\s+/g, '');
    if (
      nameNoSpace.length > 0 &&
      nameNoSymbolsNoNumbers.length > 0 &&
      noSymbols &&
      name.length < 20
    ) {
      return true;
    }
    return false;
  };

  return {
    username,
    setUsername,
    onSetUsername,
  };
};

export default useCreateAccountViewModel;
