import React from 'react';
import * as color from '../../../constants/color';
import {View, StyleSheet} from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';
import LinearGradient from 'react-native-linear-gradient';

interface ProgressBarProps{
  position: number;
  end: number;
}
const ProgressBar = (props: ProgressBarProps) => {
  return (
    <View style={style.sliderContainer} pointerEvents={'none'}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={style.gradient}
        colors={[color.PRIMARY + '55', color.PRIMARY + 'dd']}
      />
      <Slider
        disabled
        containerStyle={{marginBottom: 1}}
        onSlidingComplete={() => {}}
        trackStyle={style.trackStyle}
        value={props.position}
        minimumValue={0}
        maximumValue={props.end}
        thumbTintColor={'transparent'}
        minimumTrackTintColor={color.PRIMARY}
        maximumTrackTintColor={'transparent'}
      />
    </View>
  );
};
const style = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  sliderContainer: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  trackStyle: {
    height: 10,
    margin: 4,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  thumbStyle: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: 20,
    borderRadius: 8,
    padding: 0,
  },
});

export default ProgressBar;
