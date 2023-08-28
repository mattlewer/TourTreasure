import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {localise} from '../../../services/lang/lang';
import * as color from '../../../constants/color';
import ScreenContainer from '../../modules/ScreenContainer';
import HowToUseCard from '../../modules/HowToUseCard';
import TextButton from '../../modules/TextButton';
import Carousel from 'react-native-reanimated-carousel';
import Dots from 'react-native-dots-pagination';
import useHowToUserViewModel from '../../../services/viewModels/screens/useHowToUserViewModel';

interface HowToUseProps {
  hideButtons?: boolean;
}
const HowToUse = (props: HowToUseProps) => {
  const viewModel = useHowToUserViewModel();
  const width = Dimensions.get('window').width;
  const isEnd = viewModel.currentSlide === viewModel.info.length - 1;
  return (
    <ScreenContainer scrollable>
      <View style={style.carouselContainer}>
        {!props.hideButtons && (
          <View style={style.actionContainer}>
            <Text style={style.actionText} />
            <Text
              style={[style.actionText, style.skipLink]}
              onPress={() => {
                viewModel.setCurrentSlide(viewModel.info.length - 1);
                viewModel.onContinueToHome();
              }}>
              {localise('SKIP')}
            </Text>
          </View>
        )}
        <Carousel
          ref={viewModel.carouselRef}
          style={style.carousel}
          width={width}
          autoPlay={false}
          loop={false}
          data={viewModel.info}
          scrollAnimationDuration={500}
          onSnapToItem={viewModel.setCurrentSlide}
          renderItem={({item, index}) => (
            <HowToUseCard
              small={props.hideButtons}
              title={item.title}
              content={item.content}
              image={item.image}
            />
          )}
        />
        <View style={{width: '100%', height: 20}}>
          <Dots
            length={viewModel.info.length}
            active={viewModel.currentSlide}
            passiveColor={'#f5e6e9'}
            activeColor={color.PRIMARY}
            marginHorizontal={15}
          />
        </View>
        {!props.hideButtons && (
          <View style={style.buttonContainer}>
            <TextButton
              text={isEnd ? localise('START_EXPLORING') : localise('NEXT')}
              type={'primary'}
              onPress={
                viewModel.currentSlide === viewModel.info.length - 1
                  ? viewModel.onContinueToHome
                  : viewModel.onNextSlide
              }
            />
          </View>
        )}
      </View>
    </ScreenContainer>
  );
};

const style = StyleSheet.create({
  carouselContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    paddingVertical: 10,
  },
  actionText: {
    color: color.PRIMARY,
    fontWeight: '600',
  },
  skipLink: {
    textDecorationStyle: 'solid',
    textDecorationColor: color.PRIMARY,
    textDecorationLine: 'underline',
  },

  carousel: {
    flex:1 ,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
});
export default HowToUse;
