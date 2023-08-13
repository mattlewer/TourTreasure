import {atom} from 'recoil';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const sessionState = atom<FirebaseAuthTypes.User>({
  key: 'session-state',
  default: undefined,
});