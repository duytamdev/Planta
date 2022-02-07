import React, {useEffect, useRef} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationScreen from '../screens/NotificationScreen';
import AccountScreen from '../screens/AccountSceen';
import * as Animatable from 'react-native-animatable';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon, {Icons} from '../assets/Icons';

const TabButton = props => {
  const {children, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: {scale: 0.5, rotate: '0deg'},
        1: {scale: 1.5, rotate: '360deg'},
      });
    } else {
      viewRef.current.animate({
        0: {scale: 1.5, rotate: '360deg'},
        1: {scale: 1, rotate: '0deg'},
      });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
        {children}
      </Animatable.View>
    </TouchableOpacity>
  );
};

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
            <Icon
              type={Icons.Feather}
              name={iconName}
              size={size}
              color={focused ? '#009245' : '#000'}
            />
          );
        },
        tabBarButton: props => <TabButton {...props} />,
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
      {/*{TabArr.map((item, index) => {*/}
      {/*  return (*/}
      {/*    <Tab.Screen*/}
      {/*      key={index}*/}
      {/*      name={item.route}*/}
      {/*      component={item.component}*/}
      {/*      options={{*/}
      {/*        tabBarButton: props => (*/}
      {/*          <TabButton {...props} item={item}>*/}
      {/*            <Text>hi</Text>*/}
      {/*          </TabButton>*/}
      {/*        ),*/}
      {/*      }}*/}
      {/*    />*/}
      {/*  );*/}
      {/*})}*/}
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
