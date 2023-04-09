import {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {getPointsOfInterest} from '../../hooks/api/useFindPointsOfInterest';
import {AppStackParams} from '../../../navigation/AppStackNav';
import {useRecoilState} from 'recoil';
import {useNavigation} from '@react-navigation/native';
import {hasSavedPlace, totalFoundPlaces} from '../../userHandler';
import {userState} from '../../../state/userState';

const useHomeScreenViewModel = () => {
  const navigation = useNavigation<StackNavigationProp<AppStackParams>>();
  const [userValue, setUserValue] = useRecoilState(userState);
  const [enteredLocation, setEnteredLocation] = useState<string>();

  const points = totalFoundPlaces(userValue) * 5;

  const onSearchNew = async () => {
    if (enteredLocation) {
      onSearchLocation(enteredLocation);
    }
  };

  const onSearchLocation = async (place: string) => {
    const isSavedPlaceIndex = hasSavedPlace(userValue, place);
    if (isSavedPlaceIndex >= 0) {
      navigation.navigate('Location', {
        places: userValue.savedPlaces[isSavedPlaceIndex]!.places,
        searchedPlaceName: place,
      });
    } else {
      const foundPlaces = await getPointsOfInterest(place);
      if (foundPlaces) {
        navigation.navigate('Location', {
          places: foundPlaces,
          searchedPlaceName: place,
        });
      }
    }
  };

  return {
    onSearchNew,
    onSearchLocation,
    setEnteredLocation,
    userValue,
    points,
  };
};

export default useHomeScreenViewModel;
