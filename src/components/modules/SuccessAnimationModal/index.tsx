import React from 'react';
import {Modal, StyleSheet, Pressable, Animated} from 'react-native';
import {localise} from '../../../services/lang/lang';
import * as color from '../../../constants/color';
import Lottie from 'lottie-react-native';

interface SuccessAnimationModalProps {
  onClose: () => void;
}

const SuccessAnimationModal = (props: SuccessAnimationModalProps) => {
  return (
    <Modal visible animationType={'fade'} style={style.modal} transparent>
      <Pressable style={style.modalContainer} onPress={props.onClose}>
        <Lottie
          source={require('../../../assets/confetti.json')}
          autoPlay
          loop={false}
          style={{zIndex: 600}}
        />
        <Lottie
          source={require('../../../assets/chest1.json')}
          autoPlay
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
    backgroundColor: '#ffffffcc',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '53%',
  },
});
export default SuccessAnimationModal;
