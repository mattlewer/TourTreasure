import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';
import {hasSavedPlace} from '../../userHandler';
import {StackNavigationProp} from '@react-navigation/stack';
import {getPointsOfInterest} from '../../hooks/api/place';
import {noResultsToast} from '../../toasts';
import {HomeAndMapStackParams} from '../../../navigation/HomeAndMapStack';
import {useRecoilValue} from 'recoil';
import {useNavigation} from '@react-navigation/native';
import {userState} from '../../../state/userState';
import {validateText} from '../../validateText';
import {
  requestLocationPermission,
  requestNotificationPermission,
} from '../../permissions';
import {notificationListener} from '../../notifications';

const useHomeScreenViewModel = () => {
  const navigation =
    useNavigation<StackNavigationProp<HomeAndMapStackParams>>();
  const userValue = useRecoilValue(userState);
  const [enteredLocation, setEnteredLocation] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const popularLocations = [
    'London',
    'Paris',
    'New york',
    'Rome',
    'Amsterdam',
    'Tokyo',
    'Barcelona',
  ];

  useEffect(() => {
    const setUp = async () => {
      await requestLocationPermission();
      const notificationPermission = await requestNotificationPermission();
      if (notificationPermission) {
        notificationListener();
      }
    };
    setUp();
  }, []);

  const onSearchNew = async () => {
    setIsLoading(true);
    if (enteredLocation) {
      if (validateText(enteredLocation)) {
        onSearchLocation(enteredLocation);
      } else {
        setIsLoading(false);
        noResultsToast();
      }
    }
  };

  const onSearchLocation = async (place: string) => {
    setIsLoading(true);
    Keyboard.dismiss();
    const isSavedPlaceIndex = hasSavedPlace(userValue, place);
    if (isSavedPlaceIndex >= 0) {
      navigation.navigate('Location', {
        places: userValue.savedPlaces[isSavedPlaceIndex]!.places,
        searchedPlaceName: place,
      });
    } else {
      const foundPlaces = await getPointsOfInterest(place);
      if (foundPlaces && foundPlaces.length > 3) {
        navigation.navigate('Location', {
          places: foundPlaces,
          searchedPlaceName: place,
        });
      } else {
        noResultsToast();
      }
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    userValue,
    navigation,
    popularLocations,
    onSearchNew,
    onSearchLocation,
    setEnteredLocation,
  };
};

export default useHomeScreenViewModel;
