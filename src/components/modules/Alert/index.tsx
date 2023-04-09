import {Alert} from 'react-native';

export const CreateAlert = (
  title: string,
  message: string,
  onConfirm: () => void,
  cancelText: string,
  confirmText: string,
) =>
  Alert.alert(title, message, [
    {text: cancelText, onPress: () => {}, style: 'cancel'},
    {text: confirmText, onPress: onConfirm, style: 'destructive'},
  ]);
