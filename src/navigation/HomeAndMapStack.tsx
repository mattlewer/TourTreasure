import React from 'react';
import {Place} from '../interfaces/place';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import HomeScreen from '../components/screens/Home';
import LocationScreen from '../components/screens/Location';
import PlaceDetailsScreen from '../components/screens/PlaceDetails';
import {PlaceDetails} from '../interfaces/placeDetails';

export type HomeAndMapStackParams = {
  HomeScreen: undefined;
  Location: {
    searchedPlaceName: string;
    places: Place[];
  };
  PlaceDetails: {
    placeDetails: PlaceDetails;
  };
};
const HomeAndMap = createStackNavigator<HomeAndMapStackParams>();

const HomeAndMapStack = () => {
  return (
    <HomeAndMap.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <HomeAndMap.Screen
        options={{headerShown: false}}
        name="HomeScreen"
        component={HomeScreen}
      />
      <HomeAndMap.Screen
        options={{headerShown: false}}
        name="Location"
        component={LocationScreen}
      />
      <HomeAndMap.Screen
        options={{headerShown: false}}
        name="PlaceDetails"
        component={PlaceDetailsScreen}
      />
    </HomeAndMap.Navigator>
  );
};

export default HomeAndMapStack;
