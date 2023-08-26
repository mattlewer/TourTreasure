import {useRecoilState, useRecoilValue} from 'recoil';
import {userState} from '../../../state/userState';
import {sessionState} from '../../../state/session';
import useFirebaseDB from '../../hooks/useFirebaseDB';
import {useState} from 'react';

const useProfileViewModel = () => {
  const [userValue, setUserValue] = useRecoilState(userState);
  const fbUser = useRecoilValue(sessionState);
  const firebase = useFirebaseDB();
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    username: userValue.name,
    email: fbUser.email ?? '',
    password: '*************',
  };

  const onChangeDisplayName = async (username: string) => {
    await firebase.onChangeUsername(username);
    setUserValue({...userValue, name: username});
  };

  const onResetPassword = async () => {
    await firebase.onChangePassword(initialValues.email);
    await firebase.onSignOut()
  };

  return {
    isLoading,
    initialValues,
    setIsLoading,
    onResetPassword,
    onChangeDisplayName,
  };
};

export default useProfileViewModel;
