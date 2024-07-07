import React from 'react';
import ScreenContainer from '../components/basic/ScreenContainer.tsx';
import Header from '../components/basic/Header.tsx';
import {useAppSelector} from '../hooks/useRedux.ts';
import {selectedBus} from '../store/buses/selectors.ts';
import SpeedContainer from '../components/screenComponents/SeatsScreen/SpeedContainer.tsx';
import MapView from 'react-native-maps';
import {PermissionsAndroid, Platform} from 'react-native';

const MapScreen = () => {
  const selectedBusData = useAppSelector(selectedBus);
  const busDirection = `${selectedBusData.from} - ${selectedBusData.to}`;

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
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation
        showsMyLocationButton
        style={{width: '100%', height: '50%'}}
        onMapReady={() => {
          if (Platform.OS === 'android') {
            PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            );
          }
        }}
      />
    </ScreenContainer>
  );
};

export default MapScreen;
