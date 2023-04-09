import {SavedPlace} from '../interfaces/savedPlace';
import {Place} from '../interfaces/place';
import {User} from '../interfaces/user';

export const addFoundPlace = (
  user: User,
  place: Place,
  searchedPlaceName: string,
): User => {
  let userToReturn = user;
  const indx = user.savedPlaces.findIndex(
    item => item.name === searchedPlaceName,
  );
  if (user.savedPlaces[indx]) {
    let newUser = {...user};
    let savedPlaces = [...newUser.savedPlaces];
    let thisPlace = {...savedPlaces[indx]!};
    thisPlace.visitedPlaces = [...thisPlace.visitedPlaces!, place];
    savedPlaces[indx] = thisPlace;
    newUser.savedPlaces = savedPlaces;
    userToReturn = newUser;
  }
  return userToReturn;
};

export const savePlace = (
  user: User,
  name: string,
  shownPlaces: Place[],
): User => {
  const newPlace: SavedPlace = {
    name: name,
    places: shownPlaces,
    visitedPlaces: [],
  };
  const updatedUser: User = {
    ...user,
    savedPlaces: [...user.savedPlaces, newPlace],
  };
  return updatedUser;
};

export const deletePlace = (user: User, searchedPlaceName: string): User => {
  const newList = user.savedPlaces.filter(
    place => place.name !== searchedPlaceName,
  );
  const updatedUser: User = {
    ...user,
    savedPlaces: newList,
  };
  return updatedUser;
};

export const hasSavedPlace = (user: User, placeName: string): number =>
  user.savedPlaces.findIndex(place => place.name === placeName);

export const hasVisitedLocation = (place: Place, user: User): boolean => {
  for (let x of user.savedPlaces) {
    if (x.visitedPlaces.findIndex(p => p.place_id === place.place_id) >= 0) {
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
