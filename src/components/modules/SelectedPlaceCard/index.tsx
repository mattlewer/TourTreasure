import React from 'react';
import * as color from '../../../constants/color';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {hasVisitedLocation} from '../../../services/userHandler';
import {typography} from '../../../constants/typography';
import {Place} from '../../../interfaces/place';
import {User} from '../../../interfaces/user';
import FloatingButton from '../FloatingButton';
import TextButton from '../TextButton';
import CloseIcon from '../../../assets/close.png';
import PlaceStats from '../PlaceStats';
import MapPin from '../MapPin';

interface SelectedPlaceCardProps {
  user: User;
  place: Place;
  placeNumber: number;
  setSelectedPlace: (place: undefined) => void;
  setNavigationPlace: (place: Place) => void;
}

const SelectedPlaceCard = (props: SelectedPlaceCardProps) => {
  return (
    <Pressable
      style={style.outer}
      onPress={() => props.setSelectedPlace(undefined)}>
      <View style={style.modalContent}>
        <View style={style.modalCloseButton}>
          <FloatingButton
            onPress={() => props.setSelectedPlace(undefined)}
            image={CloseIcon}
            removeElevation
          />
        </View>
        <View style={style.placeNameNumberContainer}>
          <MapPin
            placeNumber={props.placeNumber}
            isVisited={hasVisitedLocation(props.place, props.user)}
          />
          <Text style={[typography.HeaderReg, style.headingText]}>
            {props.place.name}
          </Text>
        </View>
        <View style={{flex: 1, margin: 10}}>
          <PlaceStats place={props.place} />
        </View>
        <TextButton
          text="Navigate"
          type="primary"
          onPress={() => {
            props.setNavigationPlace(props.place);
            props.setSelectedPlace(undefined);
          }}
        />
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  outer: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    zIndex: 500,
  },
  modalContent: {
    elevation: 5,
    shadowOffset: {width: 0, height: 2},
    shadowColor: '#000',
    shadowOpacity: 1,
    position: 'absolute',
    bottom: '53%',
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  modalCloseButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 100,
  },
  placeNameNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  headingText: {
    paddingLeft: 10,
    fontWeight: '600',
    color: color.PRIMARY,
  },
});

export default SelectedPlaceCard;
