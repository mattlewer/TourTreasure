import React, {useMemo, useRef} from 'react';
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetFlatListMethods,
} from '@gorhom/bottom-sheet';
import {hasVisitedLocation} from '../../../services/userHandler';
import {StyleSheet} from 'react-native';
import {Place} from '../../../interfaces/place';
import {User} from '../../../interfaces/user';
import PlaceInfoRow from '../PlaceInfoRow';

interface BottomSheetProps {
  user: User;
  places: Place[];
  onSelectItem: (place: Place) => void;
}

const AnimatedBottomSheet = (props: BottomSheetProps) => {
  const snapPoints = useMemo(() => ['10%', '70%'], []);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const bottomSheetFlatListRef = useRef<BottomSheetFlatListMethods>(null);

  const onSelect = (place: Place) => {
    if (bottomSheetRef.current && bottomSheetFlatListRef.current) {
      bottomSheetFlatListRef.current.scrollToIndex({animated: true, index: 0});
      bottomSheetRef.current?.collapse();
    }
    props.onSelectItem(place);
  };

  return (
    <BottomSheet
      style={styles.bottomSheet}
      enablePanDownToClose={false}
      index={0}
      snapPoints={snapPoints}
      ref={bottomSheetRef}>
      <BottomSheetFlatList
        ref={bottomSheetFlatListRef}
        keyExtractor={i => i.place_id}
        style={{width: '100%'}}
        data={props.places}
        renderItem={({item, index}) => {
          return (
            <PlaceInfoRow
              place={item}
              onPress={onSelect}
              placeNumber={index + 1}
              isVisited={hasVisitedLocation(item, props.user)}
            />
          );
        }}
        contentContainerStyle={styles.contentContainer}
      />
    </BottomSheet>
  );
};
const styles = StyleSheet.create({
  bottomSheet:{
    zIndex:100,
    elevation: 20,
  },
  contentContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
});

export default AnimatedBottomSheet;
