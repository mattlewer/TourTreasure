import React, {useEffect, useRef} from 'react';
import {Modal, StyleSheet, Pressable, Animated, Vibration} from 'react-native';
import {localise} from '../../../services/lang/lang';
import * as color from '../../../constants/color';
import Lottie from 'lottie-react-native';
import AnimatedLottieView from 'lottie-react-native';

interface SuccessAnimationModalProps {
  onClose: () => void;
}

const SuccessAnimationModal = (props: SuccessAnimationModalProps) => {
  const lottieRef = useRef<AnimatedLottieView>(null);

  const PATTERN = [
    0,
    50,
    200,
    50,
    50,
    50,
    50,
    500,
  ];

  useEffect(() => {
    Vibration.vibrate(PATTERN)
    if(lottieRef.current){
      setTimeout(() => {
          lottieRef.current?.play();
      }, 200)
    }
  }, [])

  return (
    <Modal visible animationType={'fade'} style={style.modal} transparent>
      <Pressable style={style.modalContainer} onPress={props.onClose}>
        <Lottie
          ref={lottieRef}
          source={require('../../../assets/chest.json')}
          loop={false}
          onAnimationFinish={props.onClose}
          style={{zIndex: 400, width: '100%'}}
        />
        <Animated.Text
          style={{
            fontSize: 72,
            color: color.PRIMARY,
            fontWeight: '600',
          }}>
          +5{localise('POINTS_GAINED')}
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
    backgroundColor: '#ffffffcc',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '30%',
  },
});
export default SuccessAnimationModal;
