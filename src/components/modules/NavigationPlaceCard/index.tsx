import React from 'react';
import * as color from '../../../constants/color';
import {View, Text, StyleSheet} from 'react-native';
import {hasVisitedLocation} from '../../../services/userHandler';
import {typography} from '../../../constants/typography';
import {Place} from '../../../interfaces/place';
import {User} from '../../../interfaces/user';
import PlaceStats from '../PlaceStats';
import MapPin from '../MapPin';

interface NavigationPlaceCardProps {
  user: User;
  place: Place;
  timeToPlace?: number;
  placeNumber: number;
}
const NavigationPlaceCard = (props: NavigationPlaceCardProps) => {
  return (
    <View style={style.modalContent}>
      <View style={style.column}>
        <View style={style.placeNameNumberContainer}>
          <MapPin
            placeNumber={props.placeNumber}
            isVisited={hasVisitedLocation(props.place, props.user)}
          />
          <Text style={[typography.HeaderReg, style.headingText]}>
            {props.place.name}
          </Text>
        </View>
        <View style={style.statsContainer}>
          <PlaceStats place={props.place} timeToPlace={props.timeToPlace} />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  modalContent: {
    elevation: 5,
    shadowOffset: {width: 0, height: 2},
    shadowColor: '#000',
    shadowOpacity: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: 80,
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    alignItems: 'center',
    padding: 10,
  },
  column: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
  statsContainer: {
    flex: 1,
    marginTop: 10,
  },
});

export default NavigationPlaceCard;
