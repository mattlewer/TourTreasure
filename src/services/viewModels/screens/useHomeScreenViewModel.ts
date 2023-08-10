import {useState} from 'react';
import {Keyboard} from 'react-native';
import {hasSavedPlace, totalFoundPlaces} from '../../userHandler';
import {StackNavigationProp} from '@react-navigation/stack';
import {getPointsOfInterest} from '../../hooks/api/place';
import {noResultsToast} from '../../toasts';
import {AppStackParams} from '../../../navigation/AppStackNav';
import {useRecoilState} from 'recoil';
import {useNavigation} from '@react-navigation/native';
import {userState} from '../../../state/userState';
import {validateText} from '../../validateText';

const useHomeScreenViewModel = () => {
  const navigation = useNavigation<StackNavigationProp<AppStackParams>>();
  const [userValue, setUserValue] = useRecoilState(userState);
  const [enteredLocation, setEnteredLocation] = useState<string>();

  const points = totalFoundPlaces(userValue) * 5;

  const onSearchNew = async () => {
    if (enteredLocation) {
      if (validateText(enteredLocation)) {
        onSearchLocation(enteredLocation);
      }else{
        noResultsToast();
      }
    }
  };

  const onSearchLocation = async (place: string) => {
    Keyboard.dismiss();
    const isSavedPlaceIndex = hasSavedPlace(userValue, place);
    if (isSavedPlaceIndex >= 0) {
      navigation.navigate('Location', {
        places: userValue.savedPlaces[isSavedPlaceIndex]!.places,
        searchedPlaceName: place,
      });
    } else {
      const foundPlaces = await getPointsOfInterest(place);
      if (foundPlaces && foundPlaces.length > 7) {
        navigation.navigate('Location', {
          places: foundPlaces,
          searchedPlaceName: place,
        });
      } else {
        noResultsToast();
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
