import {createDrawerNavigator} from '@react-navigation/drawer';
import AppStackNav from './HomeAndMapStack';
import MenuDrawerContent from '../components/modules/MenuDrawerContent';
import * as color from '../constants/color';
import SupportAndFeedback from '../components/screens/Feedback';
import About from '../components/screens/About';
import Profile from '../components/screens/Profile';
import ActivityFeed from '../components/screens/ActivityFeed';
import {localise} from '../services/lang/lang';

const Drawer = createDrawerNavigator();

const MenuDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName={localise('HOME')}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        swipeEdgeWidth: 0,
        drawerItemStyle: {
          borderRadius: 0,
          width: '100%',
          marginLeft: 0,
        },
        drawerLabelStyle: {paddingLeft: 10},
        drawerActiveBackgroundColor: color.PRIMARY,
        drawerInactiveBackgroundColor: color.WHITE_PRIMARY,
        drawerActiveTintColor: color.WHITE,
        drawerInactiveTintColor: color.PRIMARY,
      }}
      drawerContent={props => <MenuDrawerContent {...props} />}>
      <Drawer.Screen name={localise('HOME')} component={AppStackNav} />
      <Drawer.Screen
        name={localise('ACTIVITY_FEED')}
        component={ActivityFeed}
      />
      <Drawer.Screen name={localise('PROFILE')} component={Profile} />
      <Drawer.Screen
        name={localise('SUPPORT')}
        component={SupportAndFeedback}
      />
      <Drawer.Screen name={localise('ABOUT_US')} component={About} />
    </Drawer.Navigator>
  );
};

export default MenuDrawer;
