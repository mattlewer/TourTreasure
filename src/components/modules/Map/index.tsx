import React, {useEffect, useRef} from 'react';
import * as color from '../../../constants/color';
import {
  findIndexOfPlace,
  hasVisitedLocation,
} from '../../../services/userHandler';
import MapView, {Marker, Region} from 'react-native-maps';
import {StyleSheet, View} from 'react-native';
import {GpsLocation} from '../../../interfaces/gpsLocation';
import {MapStyle} from '../../../constants/mapStyle';
import {Place} from '../../../interfaces/place';
import {User} from '../../../interfaces/user';
import MapViewDirections from 'react-native-maps-directions';
import Config from 'react-native-config';
import MapPin from '../MapPin';

interface MapProps {
  user: User;
  places: Place[];
  userLocation?: GpsLocation;
  selectedPlace?: Place;
  navigationPlace?: Place;
  searchedPlaceName: string;
  setSelectedPlace: (place: Place | undefined) => void;
  setNavigationPlace: (place: undefined) => void;
  setTimeToNavigationPlace: (duration: number) => void;
}

const Map = (props: MapProps) => {
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    if (props.selectedPlace) {
      animateToPlace(props.selectedPlace);
    }
    if (props.navigationPlace && props.userLocation) {
      animateToUser(props.userLocation);
    }
  }, [props.selectedPlace, props.navigationPlace]);

  const animateToPlace = (place: Place) => {
    if (mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude: place.geometry.location.lat,
          longitude: place.geometry.location.lng,
          latitudeDelta: 0.015,
          longitudeDelta: 0.015,
        },
        300,
      );
      setTimeout(() => {
        props.setSelectedPlace(place);
      }, 100);
    }
  };
  const animateToUser = (userLocation: GpsLocation) => {
    if (mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.015,
        },
        1000,
      );
    }
  };

  let centeredPlace: Region;
  if (props.places.length > 0) {
    centeredPlace = {
      latitude: props.places[0]?.geometry.location.lat ?? 0,
      longitude: props.places[0]?.geometry.location.lng ?? 0,
      latitudeDelta: 0.033,
      longitudeDelta: 0.033,
    };
  } else {
    centeredPlace = {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.33,
      longitudeDelta: 0.33,
    };
  }

  return (
    <View style={style.mapContainer}>
      <MapView
        onMapLoaded={() => {
          if (mapRef.current) {
            mapRef.current.fitToSuppliedMarkers(
              props.places.map(({place_id}) => place_id),
            );
          }
        }}
        ref={mapRef}
        onPress={() => {
          props.setSelectedPlace(undefined);
          props.setNavigationPlace(undefined);
        }}
        showsUserLocation
        showsCompass={false}
        customMapStyle={MapStyle}
        style={style.map}
        loadingEnabled={true}
        loadingIndicatorColor={color.PRIMARY}
        tintColor={'#000'}
        showsMyLocationButton={false}
        initialRegion={centeredPlace}>
        {props.navigationPlace ? (
          <Marker
            identifier={props.navigationPlace.place_id}
            key={props.navigationPlace.place_id}
            coordinate={{
              latitude: props.navigationPlace.geometry.location.lat,
              longitude: props.navigationPlace.geometry.location.lng,
            }}>
            <MapPin
              placeNumber={
                findIndexOfPlace(props.navigationPlace, props.places) + 1
              }
              isVisited={hasVisitedLocation(props.navigationPlace, props.user, props.searchedPlaceName)}
            />
          </Marker>
        ) : (
          props.places.map((place, index) => (
            <Marker
              tracksViewChanges={false}
              identifier={place.place_id}
              onPress={() => {
                animateToPlace(place);
              }}
              key={`${index}${Date.now()}`}
              coordinate={{
                latitude: place.geometry.location.lat,
                longitude: place.geometry.location.lng,
              }}>
              <MapPin
                placeNumber={index + 1}
                isVisited={hasVisitedLocation(place, props.user, props.searchedPlaceName)}
              />
            </Marker>
          ))
        )}
        {props.navigationPlace &&
          props.userLocation?.latitude &&
          props.userLocation.longitude && (
            <MapViewDirections
              origin={{
                longitude: props.userLocation.longitude,
                latitude: props.userLocation.latitude,
              }}
              destination={{
                longitude: props.navigationPlace.geometry.location.lng,
                latitude: props.navigationPlace.geometry.location.lat,
              }}
              apikey={Config.GOOGLE_MAPS_API_KEY!}
              strokeWidth={4}
              strokeColor={color.DIRECTION_LINE}
              mode="WALKING"
              onReady={res => props.setTimeToNavigationPlace(res.duration)}
            />
          )}
      </MapView>
    </View>
  );
};

const style = StyleSheet.create({
  mapContainer: {
    width: '100%',
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
export default Map;
