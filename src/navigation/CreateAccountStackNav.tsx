import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import Auth from '../components/screens/Auth';
import HowToUse from '../components/screens/HowToUse';

export type CreateAccoundStackParams = {
  Auth: undefined;
  HowToUse: {
    name: string;
  };
};
const CreateAccountStack = createStackNavigator<CreateAccoundStackParams>();

const CreateAccountStackNav = () => {
  return (
    <CreateAccountStack.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <CreateAccountStack.Screen
        options={{headerShown: false}}
        name="Auth"
        component={Auth}
      />
      <CreateAccountStack.Screen
        options={{headerShown: false}}
        name="HowToUse"
        component={HowToUse}
      />
    </CreateAccountStack.Navigator>
  );
};

export default CreateAccountStackNav;
