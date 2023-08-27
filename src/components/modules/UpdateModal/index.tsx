import {
  View,
  Text,
  Modal,
  StyleSheet,
  Pressable,
  Image,
  ImageBackground,
  Platform,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import * as color from '../../../constants/color';
import TextButton from '../TextButton';
import IconWithBirds from '../IconWithBirds';
import CloseIcon from '../../../assets/close.png';
import {typography} from '../../../constants/typography';
import SplashScreenNoLogo from '../../../assets/splash_screen_no_logo.png';
import {localise} from '../../../services/lang/lang';

interface UpdateModalProps {
  versionAvailable: string;
}
const UpdateModal = (props: UpdateModalProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const isAndroid = Platform.OS === 'android';
  const storeLink = isAndroid
    ? localise('ANDROID_STORE')
    : localise('IOS_STORE');
  return (
    <Modal animationType={'fade'} visible={isVisible} transparent>
      <ImageBackground style={style.container} source={SplashScreenNoLogo}>
        <View style={style.inner}>
          <Pressable
            onPress={() => setIsVisible(false)}
            style={style.closeButtonContainer}>
            <Image source={CloseIcon} style={style.closeIcon} />
          </Pressable>
          <View style={style.iconHeaderContainer}>
            <IconWithBirds />
          </View>
          <Text style={[style.text, typography.HeaderReg]}>
            {localise('UPDATE_AVAILABLE')}
          </Text>
          <Text style={[style.text, typography.BodyReg]}>
            v{props.versionAvailable}
          </Text>
          <Text style={[style.text, typography.BodyReg, {paddingVertical: 20}]}>
            {localise('UPDATE_AVAILABLE_DESC')}
          </Text>
          <View style={style.buttonContainer}>
            <TextButton
              text={localise('UPDATE')}
              type={'primary'}
              onPress={() => Linking.openURL(storeLink)}
            />
          </View>
        </View>
      </ImageBackground>
    </Modal>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    position: 'relative',
    width: '90%',
    backgroundColor: color.WHITE,
    borderRadius: 20,
    elevation: 8,
    alignItems: 'center',
  },
  iconHeaderContainer: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 50,
    paddingVertical: 20,
  },

  buttonContainer: {
    marginTop: 'auto',
    padding: 20,
    width: '100%',
  },
  text: {
    color: color.TEXT_DARK,
    textAlign: 'center',
    width: '70%',
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 500,
  },
  closeIcon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
});
export default UpdateModal;
