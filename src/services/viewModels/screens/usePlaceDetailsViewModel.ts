import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParams} from '../../../navigation/AppStackNav';
import {useEffect, useState} from 'react';
import {
  getPlaceDetailsFromPlaceId,
  getPlacePhoto,
} from '../../hooks/api/useFindPointsOfInterest';
import {PlaceDetails} from '../../../interfaces/placeDetails';

type LocationScreenRouteProp = RouteProp<AppStackParams, 'PlaceDetails'>;

const usePlaceDetailsViewModel = () => {
  const navigation = useNavigation<StackNavigationProp<AppStackParams>>();
  const {place} = useRoute<LocationScreenRouteProp>().params;
  const [placeDetails, setPlaceDetails] = useState<PlaceDetails>();
  const photo = placeDetails?.photos[0].photo_reference ?? undefined;

  useEffect(() => {
    const getPlaceDetails = async () => {
      const retrievedDetails: PlaceDetails = await getPlaceDetailsFromPlaceId(
        place.place_id,
      );
      console.log(retrievedDetails)
      setPlaceDetails(retrievedDetails);
    };
    getPlaceDetails();
  }, []);

  const onNavigateBack = () => {
    navigation.goBack();
  };
  return {
    place,
    photo,
    placeDetails,
    onNavigateBack,
  };
};

export default usePlaceDetailsViewModel;
