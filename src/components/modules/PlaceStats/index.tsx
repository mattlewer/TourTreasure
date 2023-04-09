import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {typography} from '../../../constants/typography';
import {localise} from '../../../services/lang/lang';
import {Place} from '../../../interfaces/place';
import Rating from '../../../assets/icon_rating.png';
import Review from '../../../assets/icon_reviews.png';
import Walk from '../../../assets/icon_walk.png';

interface PlaceStatsProps {
  place: Place;
  timeToPlace?: number;
}

const PlaceStats = (props: PlaceStatsProps) => {
  const textStyle = [typography.BodyReg, style.statText];
  return (
    <View style={style.row}>
      <View style={style.statContainer}>
        <Text style={textStyle}>{localise('RATING')}</Text>
        <View style={style.statValueContainer}>
          <Image source={Rating} style={style.statImage} />
          <Text style={typography.BodyReg}> {props.place.rating}</Text>
        </View>
      </View>
      <View style={style.statContainer}>
        <Text style={textStyle}>{localise('REVIEWS')}</Text>
        <View style={style.statValueContainer}>
          <Image source={Review} style={style.statImage} />
          <Text style={typography.BodyReg}>
            {props.place.user_ratings_total}
          </Text>
        </View>
      </View>
      {props.timeToPlace && (
        <View style={style.statContainer}>
          <Text style={textStyle}>{localise('TRAVEL')}</Text>
          <View style={style.statValueContainer}>
            <Image source={Walk} style={style.statImage} />
            <Text style={typography.BodyReg}>
              {Math.round(props.timeToPlace)}
              {localise('MIN')}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};
const style = StyleSheet.create({
  row: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  statContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  statValueContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statImage: {
    marginRight: 4,
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  statText: {
    textAlign: 'center',
    color: '#000',
  },
});
export default PlaceStats;
