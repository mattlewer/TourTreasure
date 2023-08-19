import {View, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import PopularLocation from '../PopularLocation';
import {PopularPlace} from '../../../interfaces/popularPlace';

interface PopularLocationListProps {
  locations: PopularPlace[];
  onSearchLocation: (placeName: string) => void;
}
const PopularLocationList = (props: PopularLocationListProps) => {
  return (
    <View style={style.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={style.container}
        contentContainerStyle={style.content}
        data={props.locations}
        ItemSeparatorComponent={() => <View style={{width: 30}} />}
        renderItem={({item}) => (
          <PopularLocation
            place={item}
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
  content: {
    paddingHorizontal: 20,
  },
});
export default PopularLocationList;
