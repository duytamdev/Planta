import React, {useEffect} from 'react';

import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import PushNotification from 'react-native-push-notification';
import LottieView from 'lottie-react-native';
import MyButton from '../components/common/MyButton';
const OrderSuccess = ({navigation}) => {
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
  const handleNavigation = name => {
    navigation.navigate(name);
  };
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.anim}
        source={require('../assets/animations/correct_ani.json')}
        autoPlay
        loop={false}
      />
      <Text style={styles.text}>Your Order has been{'\n'} accepted</Text>
      <Text style={styles.sub}>
        Your items has been placed and is on{'\n'}
        it’s way to being processed
      </Text>
      <View style={styles.sectionBottom}>
        <MyButton
          onPress={() => handleNavigation('Cart')}
          styleText={styles.textButton}
          title={'Check Order'}
        />
        <TouchableOpacity
          onPress={() => handleNavigation('BottomTabs')}
          style={styles.buttonBack}>
          <Text style={styles.textButtonBack}>Back to home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textButton: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Gilroy-Medium',
  },
  textButtonBack: {
    fontSize: 18,
    fontFamily: 'Gilroy-Medium',
  },
  buttonBack: {
    paddingVertical: 24.5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionBottom: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  container: {
    paddingHorizontal: 25,
    position: 'relative',
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#181725',
    fontSize: 28,
    fontWeight: '600',
    lineHeight: 34,
    fontFamily: 'Gilroy-ExtraBold',
    textAlign: 'center',
  },
  sub: {
    marginTop: 20,
    textAlign: 'center',
    fontFamily: 'Gilroy-Medium',
  },
  anim: {
    width: 120,
    height: 120,
  },
});
export default OrderSuccess;
