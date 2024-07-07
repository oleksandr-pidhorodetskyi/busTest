import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigator} from './TabsNavigator.tsx';
import {NavigationRoutes} from './types.ts';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TabNavigator"
        screenOptions={() => {
          return {
            gestureEnabled: false,
            header: () => null,
          };
        }}>
        <Stack.Screen
          name={NavigationRoutes.TabNavigator}
          component={TabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
