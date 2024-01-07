import {userState} from '../../../state/userState';
import {useRecoilState} from 'recoil';
import {useEffect, useState} from 'react';
import useHandleUserData from '../../hooks/useHandleUserData';
import SplashScreen from 'react-native-splash-screen';
import checkUpdate from '../../../utils/checkUpdate';

const useAppStartupViewModel = () => {
  const [userValue, setUserValue] = useRecoilState(userState);
  const [loading, setLoading] = useState(true);
  const [hasUpdate, setHasUpdate] = useState<string | undefined>();
  const handleUserData = useHandleUserData();

  useEffect(() => {
    loadData();
    checkUpdateRun();
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

  const checkUpdateRun = async () => {
    const needsUpdate = await checkUpdate();
    setHasUpdate(needsUpdate);
  };

  return {
    hasUpdate,
    userValue,
    loading,
  };
};

export default useAppStartupViewModel;
