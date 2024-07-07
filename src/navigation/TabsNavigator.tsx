import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MapScreen from '../screens/MapScreen.tsx';
import InfoScreen from '../screens/InfoScreen.tsx';
import React from 'react';
import BusNavigator from './BusNavigator.tsx';
import {Image, StyleSheet} from 'react-native';
import ICONS from '../assets/icons.ts';
import {verticalScale} from '../utils/metrics.ts';
import {NavigationRoutes} from './types.ts';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={NavigationRoutes.Home}
      screenOptions={() => {
        return {
          gestureEnabled: false,
          header: () => null,
          tabBarLabel: () => null,
          tabBarStyle: styles.tabBar,
        };
      }}>
      <Tab.Screen
        name={NavigationRoutes.BusNavigator}
        component={BusNavigator}
        options={{
          tabBarIcon: () => <Image source={ICONS.BUS} style={styles.icon} />,
        }}
      />
      <Tab.Screen
        name={NavigationRoutes.Map}
        component={MapScreen}
        options={{
          tabBarIcon: () => <Image source={ICONS.MAP} style={styles.icon} />,
        }}
      />
      <Tab.Screen
        name={NavigationRoutes.Info}
        component={InfoScreen}
        options={{
          tabBarIcon: () => <Image source={ICONS.INFO} style={styles.icon} />,
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  tabBar: {
    height: verticalScale(90),
    paddingTop: verticalScale(20),
  },
  icon: {
    height: 30,
    width: 30,
  },
});
