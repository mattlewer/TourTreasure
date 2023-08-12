import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import PopularLocation from '../PopularLocation';
import * as color from '../../../constants/color';
import {localise} from '../../../services/lang/lang';

interface PopularLocationListProps {
  locations: string[];
  onSearchLocation: (placeName: string) => void;
}
const PopularLocationList = (props: PopularLocationListProps) => {
  return (
    <View style={style.container}>
      <Text style={style.label}>{localise('POPULAR_LOCATIONS')}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator
        style={style.container}
        data={props.locations}
        ItemSeparatorComponent={() => <View style={{width: 10}} />}
        renderItem={({item}) => (
          <PopularLocation
            name={item}
            onSearchLocation={props.onSearchLocation}
          />
        )}
      />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flexShrink: 1,
  },
  label: {
    marginBottom: 10,
    alignSelf: 'flex-start',
    color: color.TEXT_DARK,
  },
});
export default PopularLocationList;
