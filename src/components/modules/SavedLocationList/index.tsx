import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {User} from '../../../interfaces/user';
import {typography} from '../../../constants/typography';
import {localise} from '../../../services/lang/lang';
import SavedLocation from '../SavedLocation';
import * as color from '../../../constants/color';
import {createEpoch} from '../../../utils/dateHandler';
import NoInfo from '../NoInfo';

interface SavedLocationListProps {
  user: User;
  onSearchLocation: (placeName: string) => void;
}
const SavedLocationList = (props: SavedLocationListProps) => {
  const sortedSaved = props.user.savedPlaces
    .slice()
    .sort((a, b) => createEpoch(b.updatedAt) - createEpoch(a.updatedAt));
  return (
    <>
      {sortedSaved.length > 0 ? (
        <View style={style.savedPlacesListContainer}>
          {sortedSaved.map((item, index) => {
            return (
              <SavedLocation
                key={index}
                name={item.name}
                onPress={() => props.onSearchLocation(item.name)}
                visitedPlaces={item.visitedPlaces.length}
                totalPlaces={item.places.length}
              />
            );
          })}
        </View>
      ) : (
        <View style={style.noSavedPlacesContainer}>
          <NoInfo text={localise('NO_SAVED_PLACES')} />
        </View>
      )}
    </>
  );
};
const style = StyleSheet.create({
  savedPlacesListContainer: {
    flex: 1,
    width: '100%',
    margin: 0,
  },
  noSavedPlacesContainer: {
    flex: 1,
    width: '100%',
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SavedLocationList;
