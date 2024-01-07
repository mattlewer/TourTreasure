import Config from 'react-native-config';
import {Place} from '../../../interfaces/place';
import {PlaceDetails} from '../../../interfaces/placeDetails';
import {
  noInfoToast,
  noResultsToast,
} from '../../../utils/toasts';

export const getPointsOfInterest = async (
  location: string,
): Promise<Place[] | undefined> => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=things+to+do+in+${location}&language=en&radius=11265&key=${Config.GOOGLE_MAPS_API_KEY}`,
    );
    const result = await response.json();
    if (result.results) {
      result.results.sort(
        (a: Place, b: Place) => b.user_ratings_total - a.user_ratings_total,
      );
    }
    return result.results;
  } catch (e) {
    noResultsToast();
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
    noInfoToast();
  }
};

export const getPlacePhoto = (photo_ref: string): string => {
  return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=600&photo_reference=${photo_ref}&key=${Config.GOOGLE_MAPS_API_KEY}`;
};
