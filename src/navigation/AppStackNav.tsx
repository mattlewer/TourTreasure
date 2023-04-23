import React from 'react';
import {Place} from '../interfaces/place';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import HomeScreen from '../components/screens/Home';
import LocationScreen from '../components/screens/Location';
import PlaceDetails from '../components/screens/PlaceDetails';

export type AppStackParams = {
  Home: undefined;
  Location: {
    searchedPlaceName: string;
    places: Place[];
  };
  PlaceDetails: {
    place: Place;
  };
};
const AppStack = createStackNavigator<AppStackParams>();

const AppStackNav = () => {
  return (
    <AppStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <AppStack.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeScreen}
      />
      <AppStack.Screen
        options={{headerShown: false}}
        name="Location"
        component={LocationScreen}
      />
      <AppStack.Screen
        options={{headerShown: false}}
        name="PlaceDetails"
        component={PlaceDetails}
      />
    </AppStack.Navigator>
  );
};

export default AppStackNav;
