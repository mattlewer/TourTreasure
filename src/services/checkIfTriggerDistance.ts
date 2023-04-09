import {distanceInKmBetweenCoordinates} from './hooks/useDistance';
import {DISTANCE_TO_TRIGGER} from '../constants/dimens';
import {GpsLocation} from '../interfaces/gpsLocation';
import {Place} from '../interfaces/place';

export const hasUserFoundLocation = (
  navigationPlace?: Place,
  selectedPlace?: Place,
  userLocation?: GpsLocation,
) => {
  if (
    navigationPlace &&
    navigationPlace.has_user_visited === false &&
    userLocation &&
    isTriggerDistance(userLocation, navigationPlace)
  ) {
    return true;
  } else if (
    selectedPlace &&
    selectedPlace.has_user_visited === false &&
    userLocation &&
    isTriggerDistance(userLocation, selectedPlace)
  ) {
    return true;
  } else {
    return false;
  }
};

export const isTriggerDistance = (
  userLocation: GpsLocation,
  place: Place,
): boolean => {
  if (
    distanceInKmBetweenCoordinates(
      userLocation.latitude,
      userLocation.longitude,
      place.geometry.location.lat,
      place.geometry.location.lng,
    ) <= DISTANCE_TO_TRIGGER
  ) {
    return true;
  } else {
    return false;
  }
};
