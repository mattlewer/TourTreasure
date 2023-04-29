import Config from 'react-native-config';
import {Place} from '../../../interfaces/place';
import {PlaceDetails} from '../../../interfaces/placeDetails';
import Toast from 'react-native-toast-message';
import {localise} from '../../lang/lang';

export const getPointsOfInterest = async (
  location: string,
): Promise<Place[] | undefined> => {
  try{
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${location}&language=en&type=tourist_attraction&radius=11265&key=${Config.GOOGLE_MAPS_API_KEY}`,
    );
    const result = await response.json();
    if (result.results) {
      result.results.sort(
        (a: Place, b: Place) => b.user_ratings_total - a.user_ratings_total,
      );
    }
    return result.results;
  }catch(e){
    Toast.show({
      type: 'error',
      text1: localise('NO_RESULTS_TITLE'),
      text2: localise('NO_RESULTS_DESC'),
      position: 'bottom',
      bottomOffset: 100,
      visibilityTime: 3000,
    });
  }
};

export const getPlaceDetailsFromPlaceId = async (
  place_id: string,
): Promise<PlaceDetails | undefined> => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${Config.GOOGLE_MAPS_API_KEY}`,
    );
    const result = await response.json();
    return result.result;
  } catch (e) {
    Toast.show({
      type: 'error',
      text1: localise('NO_INFO_TILE'),
      text2: localise('NO_INFO_DESC'),
      position: 'bottom',
      bottomOffset: 100,
      visibilityTime: 3000,
    });
  }
};

export const getPlacePhoto = (photo_ref: string): string => {
  return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=600&photo_reference=${photo_ref}&key=${Config.GOOGLE_MAPS_API_KEY}`;
};
