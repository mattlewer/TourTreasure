import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import SignIn from '../components/screens/SignIn';
import CreateAccount from '../components/screens/CreateAccount';
import HowToUse from '../components/screens/HowToUse';

export type CreateAccoundStackParams = {
  SignIn: undefined;
  CreateAccount: undefined;
  HowToUse: {
    name: string;
  };
};
const CreateAccountStack = createStackNavigator<CreateAccoundStackParams>();

const CreateAccountStackNav = () => {
  return (
    <CreateAccountStack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <CreateAccountStack.Screen
        options={{headerShown: false}}
        name="SignIn"
        component={SignIn}
      />
      <CreateAccountStack.Screen
        options={{headerShown: false}}
        name="CreateAccount"
        component={CreateAccount}
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
