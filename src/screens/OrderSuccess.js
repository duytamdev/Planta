import React from 'react';

import {Text, View, StyleSheet} from 'react-native';
import {ColorsGlobal} from '../assets/ColorsGlobal';

const OrderSuccess = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Đặt hàng thành công!</Text>
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
});
export default OrderSuccess;
