import {userState} from '../../../state/userState';
import {useRecoilState} from 'recoil';
import {useEffect, useState} from 'react';
import useHandleUserData from '../../hooks/useHandleUserData';

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
  };

  return {
    userValue,
    loading,
  };
};

export default useAppStartupViewModel;
