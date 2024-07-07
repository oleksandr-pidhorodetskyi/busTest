import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MapScreen from '../screens/MapScreen.tsx';
import InfoScreen from '../screens/InfoScreen.tsx';
import React from 'react';
import BusNavigator from './BusNavigator.tsx';
import {Image, Platform, StyleSheet} from 'react-native';
import ICONS from '../assets/icons.ts';
import {NavigationRoutes} from './types.ts';
import {verticalScale} from '../utils/metrics.ts';

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
    height: verticalScale(80),
    paddingTop: Platform.OS === 'ios' ? verticalScale(20) : 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 30,
    width: 30,
  },
});
