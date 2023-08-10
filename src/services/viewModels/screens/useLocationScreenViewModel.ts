import {useEffect, useState} from 'react';
import {
  addFoundPlace,
  deletePlace,
  hasSavedPlace,
  hasVisitedLocation,
  savePlace,
} from '../../userHandler';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {getPlaceDetailsFromPlaceId} from '../../hooks/api/place';
import {requestLocationPermission} from '../../permissions';
import {hasUserFoundLocation} from '../../checkIfTriggerDistance';
import {StackNavigationProp} from '@react-navigation/stack';
import {noPermissionToast} from '../../toasts';
import {AppStackParams} from '../../../navigation/AppStackNav';
import {useRecoilState} from 'recoil';
import {CreateAlert} from '../../../components/modules/Alert';
import {userState} from '../../../state/userState';
import {localise} from '../../lang/lang';
import {Place} from '../../../interfaces/place';
import {User} from '../../../interfaces/user';
import useLocation from '../../hooks/useLocation';

type LocationScreenRouteProp = RouteProp<AppStackParams, 'Location'>;

const useLocationScreenViewModel = () => {
  const [userValue, setUserValue] = useRecoilState(userState);
  const navigation = useNavigation<StackNavigationProp<AppStackParams>>();
  const {places, searchedPlaceName} =
    useRoute<LocationScreenRouteProp>().params;

  const [selectedPlace, setSelectedPlace] = useState<Place | undefined>();
  const [navigationPlace, setNavigationPlace] = useState<Place | undefined>();
  const [timeToNavigationPlace, setTimeToNavigationPlace] = useState<
    number | undefined
  >();
  const [shownPlaces, setShownPlaces] = useState<Place[]>(places);
  const [placeFound, setPlaceFound] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState(false);
  const userLocation = useLocation();

  useEffect(() => {
    const hasUserFoundPlace = hasUserFoundLocation(
      navigationPlace,
      selectedPlace,
      userLocation.location,
    );
    hasUserFoundPlace && checkAlreadyFound();
  }, [navigationPlace, selectedPlace, timeToNavigationPlace]);

  useEffect(() => {
    hasSavedPlace(userValue, searchedPlaceName) >= 0 && setIsSaved(true);
  }, []);

  const onNavigateBack = () => {
    navigation.goBack();
  };

  const onSetNavigationPlace = async (place: Place | undefined) => {
    const permission = await requestLocationPermission();
    if (permission) {
      setNavigationPlace(place);
    } else {
      noPermissionToast();
    }
  };

  const onViewPlaceDetails = async (place: Place) => {
    const placeDetails = await getPlaceDetailsFromPlaceId(place.place_id);
    placeDetails &&
      navigation.navigate('PlaceDetails', {placeDetails: placeDetails});
  };

  const checkAlreadyFound = () => {
    if (
      navigationPlace &&
      !hasVisitedLocation(navigationPlace, userValue, searchedPlaceName)
    ) {
      setPlaceFound(true);
    }
    if (
      selectedPlace &&
      !hasVisitedLocation(selectedPlace, userValue, searchedPlaceName)
    ) {
      setPlaceFound(true);
    }
  };

  const onPlaceFound = () => {
    let userToUpdate = userValue;
    if (hasSavedPlace(userValue, searchedPlaceName) === -1) {
      userToUpdate = savePlace(userValue, searchedPlaceName, shownPlaces);
      setIsSaved(true);
    }
    if (
      navigationPlace &&
      !hasVisitedLocation(navigationPlace, userValue, searchedPlaceName)
    ) {
      onAddFoundPlace(navigationPlace, userToUpdate);
    }
    if (
      selectedPlace &&
      !hasVisitedLocation(selectedPlace, userValue, searchedPlaceName)
    ) {
      onAddFoundPlace(selectedPlace, userToUpdate);
    }
  };

  const onAddFoundPlace = (place: Place, user: User) => {
    const updatedUser = addFoundPlace(user, place, searchedPlaceName);
    setUserValue(updatedUser);
    setSelectedPlace(place);
    setNavigationPlace(undefined);
    setPlaceFound(false);
  };

  const saveOrRemove = () => {
    if (hasSavedPlace(userValue, searchedPlaceName) >= 0) {
      CreateAlert(
        localise('ARE_YOU_SURE'),
        localise('UNSAVING_WARNING'),
        () => onRemoveSearchedPlace(),
        localise('NO'),
        localise('YES'),
      );
    } else {
      onSaveSearchedPlace();
    }
  };

  const onSaveSearchedPlace = () => {
    const updatedUser = savePlace(userValue, searchedPlaceName, shownPlaces);
    setUserValue(updatedUser);
    setIsSaved(true);
  };

  const onRemoveSearchedPlace = () => {
    const updatedUser = deletePlace(userValue, searchedPlaceName);
    setUserValue(updatedUser);
    setIsSaved(false);
  };

  return {
    isSaved,
    userValue,
    placeFound,
    shownPlaces,
    userLocation,
    selectedPlace,
    navigationPlace,
    searchedPlaceName,
    timeToNavigationPlace,
    saveOrRemove,
    onPlaceFound,
    setPlaceFound,
    onNavigateBack,
    setSelectedPlace,
    onViewPlaceDetails,
    onSetNavigationPlace,
    setTimeToNavigationPlace,
  };
};

export default useLocationScreenViewModel;
