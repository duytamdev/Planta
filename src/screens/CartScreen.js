import React from 'react';

import {Text, View, StyleSheet} from 'react-native';

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CartScreen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default CartScreen;
