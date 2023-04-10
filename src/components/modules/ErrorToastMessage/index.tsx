import {ErrorToast, ToastConfig} from 'react-native-toast-message';
import {typography} from '../../../constants/typography';

export const toastConfig: ToastConfig = {
  error: props => {
    return (
      <ErrorToast
        {...props}
        style={{borderLeftColor: '#e83427', height: 100}}
        contentContainerStyle={{height: 100}}
        text1Style={[typography.HeaderReg, {color: '#e83427'}]}
        text2Style={[typography.BodyReg]}
        text2NumberOfLines={2}
      />
    );
  },
};
