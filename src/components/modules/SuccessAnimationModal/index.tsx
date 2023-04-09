import React, {useState} from 'react';
import {View, Modal, StyleSheet, Pressable} from 'react-native';
import * as color from '../../../constants/color';
import Lottie from 'lottie-react-native';
import Animated from 'react-native-reanimated';

interface SuccessAnimationModalProps {
  onClose: () => void;
}

const SuccessAnimationModal = (props: SuccessAnimationModalProps) => {
  const [showAnimation, setShowAnimation] = useState(true);
  return (
    <Modal
      visible={showAnimation}
      animationType={'fade'}
      style={style.modal}
      transparent>
      {showAnimation && (
        <Pressable style={style.modalContainer} onPress={props.onClose}>
          <Lottie
            source={require('../../../assets/confetti.json')}
            autoPlay
            loop={false}
            style={{zIndex: 600}}
            onAnimationFinish={props.onClose}
          />
          <Animated.Text style={{fontSize: 72, color: color.BLACK, fontWeight: '600'}}>
            5 Points!
          </Animated.Text>
          {/* <Lottie
            source={require('../../../assets/chest.json')}
            autoPlay
            loop={false}
            onAnimationFinish={props.onClose}
            style={{zIndex: 600, width: '60%'}}
          /> */}
        </Pressable>
      )}
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
