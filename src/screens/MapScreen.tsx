import React, {useRef} from 'react';
import ScreenContainer from '../components/basic/ScreenContainer.tsx';
import Header from '../components/basic/Header.tsx';
import {useAppSelector} from '../hooks/useRedux.ts';
import {selectedBus} from '../store/buses/selectors.ts';
import SpeedContainer from '../components/screenComponents/SeatsScreen/SpeedContainer.tsx';
import MapView from 'react-native-maps';
import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const MapScreen = () => {
  const selectedBusData = useAppSelector(selectedBus);
  const busDirection = `${selectedBusData.from} - ${selectedBusData.to}`;
  const mapRef = useRef<MapView>(null);

  const getPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        await getCurrentLocation();
      }
    } else {
      await getCurrentLocation();
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        const newLocation = {
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        };
        mapRef.current?.animateToRegion(newLocation); // Animate to the new region
      },
      error => console.log(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  return (
    <ScreenContainer>
      <Header
        data={{
          title: 'Location',
          busId: selectedBusData.id,
          busDirection: busDirection,
        }}
        rightBottomContainer={<SpeedContainer speed="244kmph" />}
      />
      <MapView
        provider={'google'}
        ref={mapRef}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation
        showsMyLocationButton
        style={{width: '100%', height: '80%'}}
        onMapReady={getPermission}
      />
    </ScreenContainer>
  );
};

export default MapScreen;
