import {atom} from 'recoil';
import {User} from '../interfaces/user';

export const userState = atom<User>({
  key: 'user-state',
  default: undefined,
});