import React from 'react';
import {View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native';
import {getPlacePhoto} from '../../../services/hooks/api/useFindPointsOfInterest';
import {typography} from '../../../constants/typography';
import * as color from '../../../constants/color';
import NoImage from '../../../assets/no_photos.png';
import DetailsTabs from '../../modules/PlaceDetailsTabs/DetailsTabs';
import usePlaceDetailsViewModel from '../../../services/viewModels/screens/usePlaceDetailsViewModel';
import FloatingButton from '../../modules/FloatingButton';
import Back from '../../../assets/back_icon.png';

const PlaceDetails = () => {
  const viewModel = usePlaceDetailsViewModel();
  return (
    <View style={style.placeInfoContainer}>
      <View style={style.floatingBackButton}>
        <FloatingButton image={Back} onPress={viewModel.onNavigateBack}/>
      </View>
      {viewModel.photo ? (
        <Image
          source={{uri: getPlacePhoto(viewModel.photo)}}
          style={style.placeImage}
        />
      ) : (
        <View style={style.noImageContainer}>
          <Image source={NoImage} style={style.noImageImage} />
        </View>
      )}
      <Text style={[typography.HeaderReg, style.headerText]}>
        {viewModel.place.name}
      </Text>
      {viewModel.placeDetails ? (
        <>
          {viewModel.placeDetails.editorial_summary && (
            <Text style={[typography.BodyReg, style.summary]}>
              {viewModel.placeDetails.editorial_summary.overview}
            </Text>
          )}
          <DetailsTabs placeDetails={viewModel.placeDetails} />
        </>
      ) : (
        <View
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size={'large'} color={color.PRIMARY} />
        </View>
      )}
    </View>
  );
};
const style = StyleSheet.create({
  floatingBackButton:{
    position: 'absolute',
    top: 24,
    left: 20,
    zIndex: 200,
  },
  placeInfoContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: color.WHITE,
    alignItems: 'center',
  },
  placeImage: {
    width: '100%',
    height: '25%',
    resizeMode: 'cover',
  },
  noImageContainer: {
    width: '100%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.WHITE_PRIMARY,
  },
  noImageImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  headerText: {
    color: color.PRIMARY,
    paddingTop: 10,
  },
  summary: {
    textAlign: 'center',
    paddingBottom: 20,
  },
});
export default PlaceDetails;
