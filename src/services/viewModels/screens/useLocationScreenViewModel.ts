import {useEffect, useState} from 'react';
import {
  addFoundPlace,
  deletePlace,
  hasSavedPlace,
  hasVisitedLocation,
  savePlace,
} from '../../userHandler';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {hasUserFoundLocation} from '../../checkIfTriggerDistance';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParams} from '../../../navigation/AppStackNav';
import {useRecoilState} from 'recoil';
import {userState} from '../../../state/userState';
import {Place} from '../../../interfaces/place';
import {User} from '../../../interfaces/user';
import useLocation from '../../hooks/useLocation';
import {CreateAlert} from '../../../components/modules/Alert';

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

  const checkAlreadyFound = () => {
    if (navigationPlace && !hasVisitedLocation(navigationPlace, userValue)) {
      setPlaceFound(true);
    }
    if (selectedPlace && !hasVisitedLocation(selectedPlace, userValue)) {
      setPlaceFound(true);
    }
  };

  const onPlaceFound = () => {
    let userToUpdate = userValue;
    if (hasSavedPlace(userValue, searchedPlaceName) === -1) {
      userToUpdate = savePlace(userValue, searchedPlaceName, shownPlaces);
      setIsSaved(true);
    }
    if (navigationPlace && !hasVisitedLocation(navigationPlace, userValue)) {
      onAddFoundPlace(navigationPlace, userToUpdate);
    }
    if (selectedPlace && !hasVisitedLocation(selectedPlace, userValue)) {
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
        'Are you sure?',
        'Unsaving means you will lose all current progress for this location',
        () => onRemoveSearchedPlace(),
        'No',
        'Yes',
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
    setNavigationPlace,
    setTimeToNavigationPlace,
  };
};

export default useLocationScreenViewModel;
