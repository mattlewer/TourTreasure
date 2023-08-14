import {SavedPlace} from './savedPlace';

export interface User {
  name: string;
  points: number;
  hasOnboarded: boolean;
  savedPlaces: SavedPlace[];
}