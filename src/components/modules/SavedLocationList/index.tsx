import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {User} from '../../../interfaces/user';
import {typography} from '../../../constants/typography';
import {localise} from '../../../services/lang/lang';
import SavedLocation from '../SavedLocation';
import * as color from '../../../constants/color';

interface SavedLocationListProps {
  user: User;
  onSearchLocation: (placeName: string) => void;
}
const SavedLocationList = (props: SavedLocationListProps) => {
  return (
    <>
      {props.user.savedPlaces.length > 0 ? (
        <View style={style.savedPlacesListContainer}>
          {props.user.savedPlaces.map((item, index) => {
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
          <Text style={[typography.BodyReg, {color: color.PRIMARY}]}>
            {localise('NO_SAVED_PLACES')}
          </Text>
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
    flexGrow: 1,
    borderRadius: 4,
    width: '100%',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.PRIMARY + '11',
  },
});
export default SavedLocationList;
