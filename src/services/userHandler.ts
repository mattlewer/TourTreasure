import {SavedPlace} from '../interfaces/savedPlace';
import {Place} from '../interfaces/place';
import {User} from '../interfaces/user';

export const hasSavedPlace = (user: User, placeName: string): number =>
  user.savedPlaces.findIndex(place => place.name === placeName);

export const hasVisitedLocation = (
  place: Place,
  user: User,
  placeName: string,
): boolean => {
  for (let x of user.savedPlaces) {
    if (
      x.name === placeName &&
      x.visitedPlaces.findIndex(p => p.place_id === place.place_id) >= 0
    ) {
      return true;
    }
  }
  return false;
};

export const totalFoundPlaces = (user: User): number => {
  let totalFoundPlaces = 0;
  for (let x of user.savedPlaces) {
    totalFoundPlaces += x.visitedPlaces.length;
  }
  return totalFoundPlaces;
};

export const findIndexOfPlace = (place: Place, places: Place[]): number =>
  places.findIndex(p => p.place_id === place.place_id);
