import Toast from 'react-native-toast-message';
import {localise} from './lang/lang';

export const onLogInFailure = () =>
  Toast.show({
    type: 'error',
    text1: localise('LOGIN_FAILED_TITLE'),
    text2: localise('LOGIN_FAILED_DESC'),
    position: 'bottom',
    bottomOffset: 100,
    visibilityTime: 4000,
  });

export const onSignUpFailure = () =>
  Toast.show({
    type: 'error',
    text1: localise('SIGN_UP_FAILED_TITLE'),
    text2: localise('SIGN_UP_FAILED_DESC'),
    position: 'bottom',
    bottomOffset: 100,
    visibilityTime: 4000,
  });

export const noDirectionsToast = () =>
  Toast.show({
    type: 'error',
    text1: localise('NO_DIRECTIONS_TITLE'),
    text2: localise('NO_DIRECTIONS_DESC'),
    position: 'bottom',
    bottomOffset: 100,
    visibilityTime: 4000,
  });

export const noResultsToast = () =>
  Toast.show({
    type: 'error',
    text1: localise('NO_RESULTS_TITLE'),
    text2: localise('NO_RESULTS_DESC'),
    position: 'bottom',
    bottomOffset: 100,
    visibilityTime: 4000,
  });

export const noInfoToast = () =>
  Toast.show({
    type: 'error',
    text1: localise('NO_INFO_TILE'),
    text2: localise('NO_INFO_DESC'),
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
    visibilityTime: 4000,
  });

export const onResetPasswordEmailSent = () =>
  Toast.show({
    type: 'success',
    text1: localise('RESET_PASSWORD_TITLE'),
    text2: localise('RESET_PASSWORD_DESC'),
    position: 'bottom',
    bottomOffset: 100,
    visibilityTime: 6000,
  });

export const onResetPasswordEmailFailed = () =>
  Toast.show({
    type: 'success',
    text1: localise('RESET_PASSWORD_EMAIL_FAILED_TITLE'),
    text2: localise('RESET_PASSWORD_EMAIL_FAILED_DESC'),
    position: 'bottom',
    bottomOffset: 100,
    visibilityTime: 6000,
  });

export const onUsernameChangedToast = () =>
  Toast.show({
    type: 'success',
    text1: localise('USERNAME_CHANGE_SUCCESSFUL_TITLE'),
    text2: localise('USERNAME_CHANGE_SUCCESSFUL_DESC'),
    position: 'bottom',
    bottomOffset: 100,
    visibilityTime: 6000,
  });

export const onUsernameChangeFailedToast = () =>
  Toast.show({
    type: 'success',
    text1: localise('USERNAME_CHANGE_FAILED_TITLE'),
    text2: localise('USERNAME_CHANGE_FAILED_DESC'),
    position: 'bottom',
    bottomOffset: 100,
    visibilityTime: 6000,
  });

export const deleteAccountFailed = () =>
  Toast.show({
    type: 'error',
    text1: localise('FAILED_TO_DELETE_USER_TITLE'),
    text2: localise('FAILED_TO_DELETE_USER_DESC'),
    position: 'bottom',
    bottomOffset: 100,
    visibilityTime: 6000,
  });

export const deleteAccountSuccess = () =>
  Toast.show({
    type: 'error',
    text1: localise('ACCOUNT_DELETED_TITLE'),
    text2: localise('ACCOUNT_DELETED_DESC'),
    position: 'bottom',
    bottomOffset: 100,
    visibilityTime: 6000,
  });
