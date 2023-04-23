import {View, Image, ActivityIndicator, StyleSheet} from 'react-native';
import * as color from '../../../constants/color';
import React from 'react';
import { getPlacePhoto } from '../../../services/hooks/api/useFindPointsOfInterest';
import NoImage from '../../../assets/no_photos.png';

interface PlaceImageProps{
    photo?: string;
    isLoadingImage: boolean;
    setIsLoadingImage: (isLoading: boolean) => void;
}

const PlaceImage = (props: PlaceImageProps) => {
  return (
    <>
      {props.photo && (
        <Image
          onLoadStart={() => props.setIsLoadingImage(true)}
          onLoadEnd={() => props.setIsLoadingImage(true)}
          source={{uri: getPlacePhoto(props.photo)}}
          style={style.placeImage}
        />
      )}
      {!props.isLoadingImage && !props.photo && (
        <View style={style.noImageContainer}>
          <Image source={NoImage} style={style.noImageImage} />
        </View>
      )}
      {props.isLoadingImage && !props.photo && (
        <View style={style.noImageContainer}>
          <ActivityIndicator size={'large'} color={color.PRIMARY} />
        </View>
      )}
    </>
  );
};
const style = StyleSheet.create({
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
});

export default PlaceImage;
