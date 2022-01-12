import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationScreen from '../screens/NotificationScreen';
import AccountScreen from '../screens/AccountSceen';
import FeatherIcon from 'react-native-vector-icons/Feather';
const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        // tabBarActiveTintColor: '#009245',
        // tabBarInactiveTintColor: '#000',
        tabBarIcon: ({focused, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
            size = focused ? 25 : 20;
          } else if (route.name === 'Search') {
            iconName = 'search';
            size = focused ? 25 : 20;
          } else if (route.name === 'Notification') {
            iconName = 'bell';
            size = focused ? 25 : 20;
          } else if (route.name === 'Account') {
            iconName = 'user';
            size = focused ? 25 : 20;
          }
          return (
            <FeatherIcon
              name={iconName}
              size={size}
              color={focused ? '#009245' : '#000'}
            />
          );
        },
      })}>
      <Tab.Screen name={'Home'} component={HomeScreen} />
      <Tab.Screen name={'Search'} component={SearchScreen} />
      <Tab.Screen name={'Notification'} component={NotificationScreen} />
      <Tab.Screen name={'Account'} component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
