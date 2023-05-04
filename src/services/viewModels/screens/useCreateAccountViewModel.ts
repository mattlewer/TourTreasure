import {useState} from 'react';
import {CreateAccoundStackParams} from '../../../navigation/CreateAccountStackNav';
import {invalidUsernameToast} from '../../../components/modules/ErrorToasts';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {validateText} from '../../validateText';

const useCreateAccountViewModel = () => {
  const navigation =
    useNavigation<StackNavigationProp<CreateAccoundStackParams>>();
  const [username, setUsername] = useState('');

  const onSetUsername = () => {
    if (validateText(username)) {
      navigation.navigate('HowToUse', {name: username});
    } else {
      invalidUsernameToast();
    }
  };

  return {
    username,
    setUsername,
    onSetUsername,
  };
};

export default useCreateAccountViewModel;
