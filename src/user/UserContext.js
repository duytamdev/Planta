import React, {createContext, useState} from 'react';
import {getInfo, login, register, updateInfo} from './UserService';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = createContext();

const UserProvider = ({children}) => {
  const onLogin = async (email, password) => {
    try {
      const res = await login(email, password);
      if (res.error === false) {
        const token = res.data.token;
        await AsyncStorage.setItem('dataUser', JSON.stringify(res.data.user)); //get data current user
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('isLogin', JSON.stringify(true));
        return true;
      }
    } catch (e) {
      console.log('onLogin error', e);
    }
    await AsyncStorage.removeItem('token');
    return false;
  };
  const onRegister = async (email, password) => {
    try {
      const res = await register(email, password);
      if (res.error === false) {
        return true;
      }
    } catch (e) {
      console.log('onRgister error', e);
    }
    return false;
  };
  const onUpdateInfo = async (name, address, phone, avt, dob) => {
    try {
      const res = await updateInfo(name, address, phone, avt, dob);
      console.log(res);
      if (res.error === false) {
        await AsyncStorage.setItem('dataUser', JSON.stringify(res.data));
        return true;
      }
    } catch (e) {
      console.log(e);
    }
    return false;
  };
  return (
    <UserContext.Provider value={{onLogin, onRegister, onUpdateInfo}}>
      {children}
    </UserContext.Provider>
  );
};
export {UserContext, UserProvider};
