import React, {useEffect, useRef} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationScreen from '../screens/NotificationScreen';
import AccountScreen from '../screens/AccountSceen';
import * as Animatable from 'react-native-animatable';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Icon, {Icons} from '../components/Icons';
const Tab = createBottomTabNavigator();


const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
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
            <Icon
              type={Icons.Feather}
              name={iconName}
              size={size}
              color={focused ? '#009245' : '#000'}
            />
          );
        },
        tabBarLabel: ({focused}) => {
          return focused ? (
            <View style={{marginTop: -8}}>
              <Icon type={Icons.Entypo} name="dot-single" color={'#009245'} />
            </View>
          ) : null;
        },
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 16,
        },
      })}>
      <Tab.Screen name={'Home'} component={HomeScreen} />
      <Tab.Screen
        name={'Search'}
        options={{
          title: 'TÌM KIẾM',
          headerShown: true,
          headerTitleAlign: 'center',
          headerShadowVisible: false,
        }}
        component={SearchScreen}
      />
      <Tab.Screen
        name={'Notification'}
        options={{
          title: 'THÔNG BÁO',
          headerShown: true,
          headerTitleAlign: 'center',
          headerShadowVisible: false,
        }}
        component={NotificationScreen}
      />
      <Tab.Screen
        name={'Account'}
        options={{
          title: 'PROFILE',
          headerShown: true,
          headerTitleAlign: 'center',
          headerShadowVisible: false,
        }}
        component={AccountScreen}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default BottomNavigation;
