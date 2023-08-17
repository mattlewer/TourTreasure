import {Place} from './place';

export interface SavedPlace {
  name: string;
  places: Place[];
  visitedPlaces: Place[];
  updatedAt: string;
}
