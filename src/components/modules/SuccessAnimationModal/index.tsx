import React, {useEffect} from 'react';
import {Modal, StyleSheet, Pressable, Animated} from 'react-native';
import {Easing} from 'react-native-reanimated';
import * as color from '../../../constants/color';
import Lottie from 'lottie-react-native';
import { localise } from '../../../services/lang/lang';

interface SuccessAnimationModalProps {
  onClose: () => void;
}

const SuccessAnimationModal = (props: SuccessAnimationModalProps) => {
  const count = new Animated.Value(1000);

  useEffect(() => {
    playAnimation();
  }, []);

  const playAnimation = () => {
    Animated.timing(count, {
      toValue: 0,
      duration: 800,
      easing: Easing.bounce,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Modal visible animationType={'fade'} style={style.modal} transparent>
      <Pressable style={style.modalContainer} onPress={props.onClose}>
        <Lottie
          source={require('../../../assets/confetti.json')}
          autoPlay
          loop={false}
          style={{zIndex: 600}}
          onAnimationFinish={props.onClose}
        />
        <Lottie
          source={require('../../../assets/chest.json')}
          autoPlay
          loop={false}
          onAnimationFinish={props.onClose}
          style={{zIndex: 600, width: '60%'}}
        />
        <Animated.Text
          style={{
            fontSize: 72,
            color: color.BLACK,
            fontWeight: '600',
            marginTop: count,
          }}>
          5{localise('POINTS_GAINED')}
        </Animated.Text>
      </Pressable>
    </Modal>
  );
};
const style = StyleSheet.create({
  modal: {
    zIndex: 500,
    flex: 1,
    width: '100%',
  },
  modalContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000000',
  },
});
export default SuccessAnimationModal;
