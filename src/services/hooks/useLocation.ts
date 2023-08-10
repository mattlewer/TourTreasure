import {useEffect, useState} from 'react';
import {GpsLocation} from '../../interfaces/gpsLocation';
import Geolocation from 'react-native-geolocation-service';
import {requestLocationPermission} from '../permissions';

const useLocation = () => {
  const [location, setLocation] = useState<GpsLocation>({
    latitude: 100,
    longitude: 0,
  });

  useEffect(() => {
    const fetchPermission = async () => {
      const hasPermission = await requestLocationPermission();
      if (hasPermission) {
        Geolocation.getCurrentPosition(
          position => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          error => {
            console.log(error.code, error.message);
          },
          {
            enableHighAccuracy: true,
          },
        );
        Geolocation.watchPosition(
          position => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          error => {
            console.log(error.code, error.message);
          },
          {
            enableHighAccuracy: true, fastestInterval: 5000,
          },
        );
      }
    };
    fetchPermission();
  }, []);

  return {
    location,
  };
};

export default useLocation;
