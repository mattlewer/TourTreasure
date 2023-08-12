import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {typography} from '../../../constants/typography';
import * as color from '../../../constants/color';
import Back from '../../../assets/back_icon.png';
import PlaceImage from '../../modules/PlaceImage';
import DetailsTabs from '../../modules/PlaceDetailsTabs/DetailsTabs';
import FloatingButton from '../../modules/FloatingButton';
import usePlaceDetailsScreenViewModel from '../../../services/viewModels/screens/usePlaceDetailsViewModel';

const PlaceDetailsScreen = () => {
  const viewModel = usePlaceDetailsScreenViewModel();
  return (
    <View style={style.placeInfoContainer}>
      <View style={style.floatingBackButton}>
        <FloatingButton image={Back} onPress={viewModel.onNavigateBack} />
      </View>
      <PlaceImage
        photo={viewModel.photo}
        isLoadingImage={viewModel.isLoadingImage}
        setIsLoadingImage={viewModel.setIsLoadingImage}
      />
      <Text style={[typography.HeaderReg, style.headerText]}>
        {viewModel.placeDetails.name}
      </Text>
      {viewModel.placeDetails.editorial_summary && (
        <Text style={[typography.BodyReg, style.summary]}>
          {viewModel.placeDetails.editorial_summary.overview}
        </Text>
      )}
      <DetailsTabs placeDetails={viewModel.placeDetails} />
    </View>
  );
};
const style = StyleSheet.create({
  placeInfoContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: color.WHITE,
    alignItems: 'center',
  },
  floatingBackButton: {
    position: 'absolute',
    top: 24,
    left: 20,
    zIndex: 200,
  },
  headerText: {
    paddingHorizontal: 20,
    textAlign: 'center',
    color: color.PRIMARY,
    fontWeight: '600',
    paddingVertical: 10,
  },
  summary: {
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});
export default PlaceDetailsScreen;
