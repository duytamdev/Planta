import React, {useEffect} from 'react';

import {Text, View, StyleSheet} from 'react-native';
import {ColorsGlobal} from '../assets/ColorsGlobal';
import PushNotification from 'react-native-push-notification';
import LottieView from 'lottie-react-native';
const OrderSuccess = () => {
  useEffect(() => {
    onNotificationLocal();
  }, []);
  const onNotificationLocal = () => {
    PushNotification.localNotification({
      channelId: 'orders-channel',
      title: 'Bạn đã đặt hàng thành công!',
      message: 'Chúng tôi sẽ ship đến tận cửa nhà bạn trong tít tắc!',
    });
  };
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.anim}
        source={require('../assets/animations/correct_anim.json')}
        autoPlay
        loop={false}
      />
      <Text style={styles.text}>Đã Đặt Hàng Thành Công!</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: ColorsGlobal.main, fontSize: 25},
  anim: {
    width: 120,
    height: 120,
  },
});
export default OrderSuccess;
