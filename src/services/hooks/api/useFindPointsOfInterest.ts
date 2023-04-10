import Config from 'react-native-config';
import {Place} from '../../../interfaces/place';

export const getPointsOfInterest = async (
  location: string,
): Promise<Place[]> => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${location}&language=en&type=tourist_attraction&radius=11265&key=${Config.GOOGLE_MAPS_API_KEY}`,
  );
  const result = await response.json();
  if(result.results){
    result.results.sort((a: Place, b: Place) => (b.user_ratings_total - a.user_ratings_total));
    result.results.map((place: Place) => {
      place.has_user_visited = false;
    })
  }
  return result.results;
};