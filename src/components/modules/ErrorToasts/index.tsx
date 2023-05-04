import Toast from 'react-native-toast-message';
import {localise} from '../../../services/lang/lang';

export const noDirectionsToast = () =>
  Toast.show({
    type: 'error',
    text1: localise('NO_DIRECTIONS_TITLE'),
    text2: localise('NO_DIRECTIONS_DESC'),
    position: 'bottom',
    bottomOffset: 100,
    visibilityTime: 3000,
  });

export const noResultsToast = () =>
  Toast.show({
    type: 'error',
    text1: localise('NO_RESULTS_TITLE'),
    text2: localise('NO_RESULTS_DESC'),
    position: 'bottom',
    bottomOffset: 100,
    visibilityTime: 3000,
  });

export const noInfoToast = () =>
  Toast.show({
    type: 'error',
    text1: localise('NO_INFO_TILE'),
    text2: localise('NO_INFO_DESC'),
    position: 'bottom',
    bottomOffset: 100,
    visibilityTime: 3000,
  });

export const invalidUsernameToast = () =>
  Toast.show({
    type: 'error',
    text1: localise('INVALID_USERNAME_TITLE'),
    text2: localise('INVALID_USERNAME_DESC'),
    position: 'bottom',
    bottomOffset: 100,
    visibilityTime: 4000,
  });

export const noPermissionToast = () =>
  Toast.show({
    type: 'error',
    text1: localise('NO_PERMISSION_TITLE'),
    text2: localise('NO_PERMISSION_DESC'),
    position: 'bottom',
    bottomOffset: 100,
    visibilityTime: 3000,
  });
