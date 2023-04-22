import {userState} from '../../../state/userState';
import {useRecoilState} from 'recoil';
import {useEffect, useState} from 'react';
import useHandleUserData from '../../hooks/useHandleUserData';
import SplashScreen from 'react-native-splash-screen'

const useAppStartupViewModel = () => {
  const [userValue, setUserValue] = useRecoilState(userState);
  const [loading, setLoading] = useState(true);
  const handleUserData = useHandleUserData();

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (userValue) {
      handleUserData.storeUser(userValue);
    }
  }, [userValue]);

  const loadData = async () => {
    await handleUserData.loadUser();
    setLoading(false);
    SplashScreen.hide();
  };

  return {
    userValue,
    loading,
  };
};

export default useAppStartupViewModel;
