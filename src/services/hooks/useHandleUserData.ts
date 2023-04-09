import {User} from '../../interfaces/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userState} from '../../state/userState';
import {useRecoilState, useResetRecoilState} from 'recoil';

const useHandleUserData = () => {
  const resetRecoilState = useResetRecoilState(userState);
  const [userValue, setUserValue] = useRecoilState(userState);

  const storeUser = async (user: User) => {
    try {
      const jsonValue = JSON.stringify(user);
      await AsyncStorage.setItem('@user', jsonValue);
    } catch (e) {
      throw new Error('Failed to store user');
    }
  };

  const loadUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@user');
      const loadedUser = jsonValue != null ? JSON.parse(jsonValue) : null;
      if (loadedUser) {
        setUserValue(loadedUser);
      }
    } catch (e) {
      throw Error('Could not load user');
    }
  };

  const deleteUser = async () => {
    try {
      await AsyncStorage.removeItem('@user');
      resetRecoilState();
      return true;
    } catch (e) {
      throw new Error('Failed to delete user');
    }
  };

  return {
    deleteUser,
    storeUser,
    loadUser,
  };
};

export default useHandleUserData;
