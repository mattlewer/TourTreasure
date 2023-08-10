import {Platform} from 'react-native';
import {requestMultiple, PERMISSIONS} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

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

