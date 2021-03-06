import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PushNotification from 'react-native-push-notification';
import Text from '../assets/TextMy';
const SplashScreen = ({navigation}) => {
  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'orders-channel',
      channelName: 'Orders Channel',
    });
  };
  useEffect(() => {
    createChannels();
    const isLogin = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('isLogin');
        return jsonValue != null ? JSON.parse(jsonValue) : false;
      } catch (e) {
        console.log(e);
      }
    };
    const timeout = setTimeout(async () => {
      const logined = await isLogin();
      await navigation.replace(logined ? 'BottomTabs' : 'Login');
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.sectionLogo}>
        <Image
          style={styles.logo}
          source={require('../assets/images/carrot.png')}
        />
        <View>
          <Text style={styles.titleLogo}>Planta</Text>
          <Text style={styles.subTitle}>mua cây trồng online</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#53B175',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginRight: 10,
  },
  titleLogo: {
    fontWeight: 'bold',
    fontSize: 48,
    marginBottom: -10,
    color: 'white',
  },
  subTitle: {
    color: '#fff',
  },
});
export default SplashScreen;
