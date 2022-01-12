import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import BottomNavigation from './BottomNavigation';

const Stack = createNativeStackNavigator();
const MainNavigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'Splash'} component={SplashScreen} />
        <Stack.Screen name={'Login'} component={LoginScreen} />
        <Stack.Screen name={'Register'} component={RegisterScreen} />
        <Stack.Screen name={'BottomTabs'} component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigations;
