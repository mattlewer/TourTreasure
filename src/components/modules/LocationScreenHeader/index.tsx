import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {typography} from '../../../constants/typography';
import * as color from '../../../constants/color';
import BackIcon from '../../../assets/back_icon.png';
import FloatingButton from '../FloatingButton';
import SaveIconEnabled from '../../../assets/heart_enabled.png';
import SaveIconDisabled from '../../../assets/heart_disabled.png';

interface LocationScreenHeaderProps {
  onNavigateBack: () => void;
  saveOrRemove: () => void;
  searchedPlaceName: string;
  isSaved: boolean;
}
const LocationScreenHeader = (props: LocationScreenHeaderProps) => {
  return (
    <View style={style.outerContainer}>
      <View style={style.innerContainer}>
        <View style={style.backButtonContainer}>
          <FloatingButton onPress={props.onNavigateBack} image={BackIcon} />
        </View>
        <View style={style.placeTextContainer}>
          <Text style={[typography.HeaderReg, style.placeText]}>
            {props.searchedPlaceName}
          </Text>
        </View>
        <View style={style.saveButtonContainer}>
          <FloatingButton
            onPress={props.saveOrRemove}
            image={props.isSaved ? SaveIconEnabled : SaveIconDisabled}
          />
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  outerContainer: {
    position: 'absolute',
    width: '100%',
    top: 24,
    left: 0,
    zIndex: 200,
  },
  innerContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backButtonContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 100,
  },
  placeTextContainer: {
    marginHorizontal: 20,
    paddingVertical: 4,
    paddingHorizontal: 16,
    justifyContent: 'center',
    maxWidth: '65%',
    borderRadius: 8,
    backgroundColor: color.WHITE,
    elevation: 2,
    shadowOffset: {width: 0, height: 2},
    shadowColor: color.BLACK,
    shadowOpacity: 1,
  },
  placeText: {
    color: color.PRIMARY,
    textAlign: 'center',
  },
  saveButtonContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 100,
  },
});
export default LocationScreenHeader;
