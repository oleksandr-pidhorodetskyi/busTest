import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SeatsScreen from '../screens/SeatsScreen';
import {NavigationRoutes} from './types.ts';

const Stack = createNativeStackNavigator();

const BusNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={() => {
      return {
        gestureEnabled: false,
        header: () => null,
      };
    }}>
    <Stack.Screen name={NavigationRoutes.Home} component={HomeScreen} />
    <Stack.Screen name={NavigationRoutes.Seats} component={SeatsScreen} />
  </Stack.Navigator>
);

export default BusNavigator;
