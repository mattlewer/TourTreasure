import {Platform} from 'react-native';
import {requestMultiple, PERMISSIONS} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import messaging from '@react-native-firebase/messaging';

export const requestLocationPermission = async () => {
  if (Platform.OS === 'android') {
    const statuses = await requestMultiple([
      PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    ]);
    return statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION] === 'granted';
  } else {
    const statuses = await Geolocation.requestAuthorization('always');
    return statuses === 'granted';
  }
};

export const requestNotificationPermission = async (): Promise<Boolean> => {
  if (Platform.OS === 'android') {
    const statuses = await requestMultiple([
      PERMISSIONS.ANDROID.POST_NOTIFICATIONS,
    ]);
    return statuses[PERMISSIONS.ANDROID.POST_NOTIFICATIONS] === 'granted';
  } else {
    return false;
  }
};
