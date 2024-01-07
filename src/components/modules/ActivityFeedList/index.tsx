import React from 'react';
import {
  View,
  Text,
  SectionList,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {ActivityFeedItem} from '../../../interfaces/activityFeedItem';
import Rating from '../../../assets/icon_rating.png';
import * as color from '../../../constants/color';
import {formatIsoString} from '../../../utils/dateHandler';

interface ActivityFeedListProps {
  items: ActivityFeedItem[];
}
const ActivityFeedList = (props: ActivityFeedListProps) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <SectionList
        style={style.container}
        contentContainerStyle={style.listContainer}
        sections={props.items}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({item}) => (
          <View style={style.item}>
            <Text style={style.title}>{item.name}</Text>
            <Text style={style.placeName}>{item.placeName}</Text>
            <View style={style.statValueContainer}>
              <Image source={Rating} style={style.statImage} />
              <Text style={style.rating}> {item.rating}</Text>
            </View>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={style.header}>{formatIsoString(title)}</Text>
        )}
      />
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  listContainer: {
    width: '100%',
    paddingBottom: 20,
  },
  item: {
    width: '100%',
    backgroundColor: color.WHITE_PRIMARY,
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
    elevation: 0,
    borderColor: color.TEXT_DARK,
  },
  title: {
    color: color.PRIMARY,
    fontSize: 16,
    fontWeight: '500',
  },
  placeName: {
    color: color.TEXT_DARK,
    fontWeight: '600',
  },
  statValueContainer: {
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  statImage: {
    marginRight: 4,
    width: 10,
    height: 10,
    resizeMode: 'contain',
  },
  rating: {
    alignSelf: 'flex-end',
    color: color.TEXT_DARK,
    fontSize: 12,
  },
  header: {
    color: color.TEXT_DARK,
    fontWeight: '600',
    paddingTop: 20,
  },
});
export default ActivityFeedList;
