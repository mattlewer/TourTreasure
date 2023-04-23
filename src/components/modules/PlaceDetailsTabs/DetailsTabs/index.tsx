import React, {useState} from 'react';
import {View, Text, useWindowDimensions, StyleSheet} from 'react-native';
import {SceneMap, TabBar, TabView, TabBarProps} from 'react-native-tab-view';
import {PlaceDetails} from '../../../../interfaces/placeDetails';
import {typography} from '../../../../constants/typography';
import {localise} from '../../../../services/lang/lang';
import * as color from '../../../../constants/color';
import Hours from '../Hours';
import Reviews from '../Reviews';
import Contact from '../Contact';

interface DetailsTabsProps {
  placeDetails: PlaceDetails;
}
const DetailsTabs = (props: DetailsTabsProps) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {key: 'hours', title: localise('HOURS_TAB')},
    {key: 'reviews', title: localise('REVIEWS_TAB')},
    {key: 'contact', title: localise('CONTACT_TAB')},
  ]);

  const HoursRoute = () => {
    if (props.placeDetails.opening_hours) {
      return (
        <View style={{flex: 1, backgroundColor: color.WHITE}}>
          <Hours details={props.placeDetails} />
        </View>
      );
    } else {
      return (
        <View style={style.noDetailWrapper}>
          <Text style={[typography.BodyReg, {color: color.PRIMARY}]}>
            {localise('NO_OPENING_HOURS')}
          </Text>
        </View>
      );
    }
  };

  const ReviewRoute = () => {
    if (props.placeDetails.reviews) {
      return (
        <View style={{flex: 1, backgroundColor: color.WHITE}}>
          <Reviews reviews={props.placeDetails.reviews} />
        </View>
      );
    } else {
      return (
        <View style={style.noDetailWrapper}>
          <Text style={[typography.BodyReg, {color: color.PRIMARY}]}>
            {localise('NO_REVIEWS')}
          </Text>
        </View>
      );
    }
  };

  const ContactRoute = () => (
    <View style={{flex: 1, backgroundColor: color.WHITE}}>
      <Contact details={props.placeDetails} />
    </View>
  );

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: color.PRIMARY}}
      activeColor={color.PRIMARY}
      inactiveColor={color.TEXT_DARK}
      labelStyle={{textAlign: 'center'}}
      style={{backgroundColor: color.WHITE}}
    />
  );

  return (
    <View style={{flex: 1, width: '100%'}}>
      <TabView
        navigationState={{index, routes}}
        renderScene={SceneMap({
          hours: HoursRoute,
          reviews: ReviewRoute,
          contact: ContactRoute,
        })}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </View>
  );
};
const style = StyleSheet.create({
  noDetailWrapper: {
    flex: 1,
    backgroundColor: color.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default DetailsTabs;
