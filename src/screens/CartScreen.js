import React from 'react';

import {Text, View, StyleSheet} from 'react-native';
import ProductItemInCart from '../components/ProductItemInCart';

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <ProductItemInCart style={styles.item} />
      <ProductItemInCart style={styles.item} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    marginTop: 16,
  },
});
export default CartScreen;
