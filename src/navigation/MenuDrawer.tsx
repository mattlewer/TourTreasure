import {createDrawerNavigator} from '@react-navigation/drawer';
import AppStackNav from './AppStackNav';
import MenuDrawerContent from '../components/modules/MenuDrawerContent';
import * as color from '../constants/color';
const Drawer = createDrawerNavigator();

const MenuDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        swipeEdgeWidth: 0,
        drawerItemStyle: {
          borderRadius: 0,
          width: '100%',
          marginLeft: 0,
        },
        drawerLabelStyle:{paddingLeft: 10},
        drawerActiveBackgroundColor: color.PRIMARY,
        drawerInactiveBackgroundColor: color.WHITE_PRIMARY,
        drawerActiveTintColor: color.WHITE,
        drawerInactiveTintColor: color.PRIMARY,
      }}
      drawerContent={props => <MenuDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={AppStackNav} />
    </Drawer.Navigator>
  );
};

export default MenuDrawer;
