import {ActivityFeedItem} from '../interfaces/activityFeedItem';
import {Place} from '../interfaces/place';
import {SavedPlace} from '../interfaces/savedPlace';
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

export const getFoundPlacesDateOrdered = (
  savedPlaces: SavedPlace[],
): ActivityFeedItem[] => {
  // Convert and group the data using a Map
  const groupedDataMap = new Map();

  savedPlaces.forEach(person => {
    const placeName = person.name;
    person.visitedPlaces.forEach(place => {
      if (!place.visited_date) {
        //skip
      } else {
        const date = new Date(place.visited_date);
        const day = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
        ).toISOString();

        if (!groupedDataMap.has(day)) {
          groupedDataMap.set(day, {title: day, data: []});
        }
        const objToStore = {
          name: place.name,
          rating: place.rating,
          placeName: placeName,
        };
        groupedDataMap.get(day).data.push(objToStore);
      }
    });
  });

  // Convert groupedDataMap values to an array
  const resultArray: ActivityFeedItem[] = Array.from(groupedDataMap.values());
  return resultArray;
};
