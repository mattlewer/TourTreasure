import {useEffect, useState} from 'react';
import {hasSavedPlace, hasVisitedLocation} from '../../../utils/userHandler';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {getPlaceDetailsFromPlaceId} from '../../hooks/api/place';
import {requestLocationPermission} from '../../../utils/permissions';
import {hasUserFoundLocation} from '../../../utils/checkIfTriggerDistance';
import {StackNavigationProp} from '@react-navigation/stack';
import {noPermissionToast} from '../../../utils/toasts';
import {HomeAndMapStackParams} from '../../../navigation/HomeAndMapStack';
import {useRecoilState} from 'recoil';
import {CreateAlert} from '../../../components/modules/Alert';
import {userState} from '../../../state/userState';
import {localise} from '../../lang/lang';
import {Place} from '../../../interfaces/place';
import useLocation from '../../hooks/useLocation';
import useFirebaseDB from '../../hooks/useFirebaseDB';

type LocationScreenRouteProp = RouteProp<HomeAndMapStackParams, 'Location'>;

const useLocationScreenViewModel = () => {
  const firebase = useFirebaseDB();
  const [userValue, setUserValue] = useRecoilState(userState);
  const navigation =
    useNavigation<StackNavigationProp<HomeAndMapStackParams>>();
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

  const onPlaceFound = async () => {
    let wasSaved = true;
    if (hasSavedPlace(userValue, searchedPlaceName) === -1) {
      wasSaved = false;
    }
    if (
      navigationPlace &&
      !hasVisitedLocation(navigationPlace, userValue, searchedPlaceName)
    ) {
      onAddFoundPlace(navigationPlace, wasSaved);
    }
    if (
      selectedPlace &&
      !hasVisitedLocation(selectedPlace, userValue, searchedPlaceName)
    ) {
      onAddFoundPlace(selectedPlace, wasSaved);
    }
  };

  const onAddFoundPlace = async (place: Place, previouslySaved: boolean) => {
    if (previouslySaved) {
      await firebase.onAddFoundLandmark(place, searchedPlaceName);
    } else {
      await firebase.onAddFoundLandMarkNotSavedLocation(
        place,
        searchedPlaceName,
        shownPlaces,
      );
    }
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
      firebase.onAddSavedLocation(searchedPlaceName, shownPlaces);
    }
  };

  const onRemoveSearchedPlace = () => {
    firebase.onDeleteSavedLocation(searchedPlaceName);
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
