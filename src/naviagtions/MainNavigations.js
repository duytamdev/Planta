import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import BottomNavigation from './BottomNavigation';
import UpdateInfo from '../screens/UpdateInfo';
import CartScreen from '../screens/CartScreen';
import DetailsProduct from '../screens/DetailsProduct';

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
        <Stack.Screen name={'DetailsProduct'} component={DetailsProduct} />
        <Stack.Screen
          options={{
            title: 'Chỉnh sửa thông tin',
            headerShown: true,
            headerTitleAlign: 'center',
            headerShadowVisible: false,
          }}
          name={'UpdateInfo'}
          component={UpdateInfo}
        />
        <Stack.Screen
          name={'Cart'}
          component={CartScreen}
          options={{
            title: 'GIỎ HÀNG',
            headerShown: true,
            headerTitleAlign: 'center',
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigations;
