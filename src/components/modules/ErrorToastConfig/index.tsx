import * as color from '../../../constants/color';
import {ErrorToast, ToastConfig} from 'react-native-toast-message';
import {typography} from '../../../constants/typography';

export const toastConfig: ToastConfig = {
  error: props => {
    return (
      <ErrorToast
        {...props}
        style={{borderLeftColor: color.ERROR_RED, height: 100}}
        contentContainerStyle={{height: 100}}
        text1Style={[typography.HeaderReg, {color: color.ERROR_RED}]}
        text2Style={[typography.BodyReg]}
        text2NumberOfLines={5}
        onPress={() => props.hide()}
      />
    );
  },
  success: props => {
    return (
      <ErrorToast
        {...props}
        style={{borderLeftColor: color.SUCCESS_GREEN, height: 100}}
        contentContainerStyle={{height: 100}}
        text1Style={[typography.HeaderReg, {color: color.TEXT_DARK}]}
        text2Style={[typography.BodyReg]}
        text2NumberOfLines={5}
        onPress={() => props.hide()}
      />
    );
  },
};
