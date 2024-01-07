import React from 'react';
import {Review} from '../../../../interfaces/placeDetails';
import {typography} from '../../../../constants/typography';
import {Text, FlatList, StyleSheet, View} from 'react-native';
import * as color from '../../../../constants/color';
import {generateInitials} from '../../../../utils/generateInitals';

interface ReviewsProps {
  reviews: Review[];
}
const Reviews = (props: ReviewsProps) => {
  return (
    <FlatList
      showsVerticalScrollIndicator
      contentContainerStyle={{padding: 10}}
      data={props.reviews}
      renderItem={({item, index}) => {
        const authorInitials = generateInitials(item.author_name);
        return (
          <View style={style.reviewContainer} key={index}>
            <View style={style.reviewStats}>
              <View style={style.authorTextContainer}>
                <Text style={style.authorText}>{authorInitials}</Text>
              </View>
              <Text style={[typography.BodyReg, style.dateText]}>
                {item.relative_time_description}
              </Text>
            </View>
            <Text key={index} style={typography.BodyReg}>
              {item.text}
            </Text>
          </View>
        );
      }}
    />
  );
};
const style = StyleSheet.create({
  reviewContainer: {
    backgroundColor: color.WHITE_PRIMARY,
    padding: 10,
    margin: 5,
    borderRadius: 12,
    elevation: 2,
  },
  reviewStats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  authorTextContainer: {
    backgroundColor: color.PRIMARY,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  authorText: {
    color: color.WHITE,
    fontSize: 12,
  },
  dateText: {
    color: color.PRIMARY,
    fontWeight: '500',
  },
});
export default Reviews;
