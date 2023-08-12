import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeAndMapStackParams} from '../../../navigation/HomeAndMapStack';
import { useState } from 'react';

type PlaceDetailsScreenRouteProp = RouteProp<HomeAndMapStackParams, 'PlaceDetails'>;

const usePlaceDetailsScreenViewModel = () => {
  const navigation = useNavigation<StackNavigationProp<HomeAndMapStackParams>>();
  const {placeDetails} = useRoute<PlaceDetailsScreenRouteProp>().params;
  const [isLoadingImage, setIsLoadingImage] = useState(false);

  let photo = undefined;
  if(placeDetails && placeDetails.photos){
    photo = placeDetails.photos[0].photo_reference
  }
  
  const onNavigateBack = () => {
    navigation.goBack();
  };

  return {
    photo,
    placeDetails,
    isLoadingImage,
    onNavigateBack,
    setIsLoadingImage,
  };
};

export default usePlaceDetailsScreenViewModel;
