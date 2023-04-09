import {useState} from 'react';
import {CreateAccoundStackParams} from '../../../navigation/CreateAccountStackNav';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

const useCreateAccountViewModel = () => {
  const navigation =
    useNavigation<StackNavigationProp<CreateAccoundStackParams>>();
  const [username, setUsername] = useState('');

  const onSetUsername = () => {
    if(username.length > 0){
      navigation.navigate('HowToUse', {name: username})
    }
  };

  return {
    username,
    setUsername,
    onSetUsername,
  };
};

export default useCreateAccountViewModel;
