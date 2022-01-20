import React from 'react';

import {Text, View, StyleSheet, Dimensions} from 'react-native';
import ProductItem from './ProductItem';

const ListProduct = ({name, products}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>{name}</Text>
      <View style={styles.productsContainer}>
        {products &&
          products.map(product => {
            return (
              <ProductItem
                style={styles.product}
                madein={product.madein}
                name={product.name}
                price={product.price}
                image={{uri: product.images[0]}}
              />
            );
          })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    backgroundColor: '#fff',
    paddingStart: 15,
  },
  textHeader: {
    color: '#000',
    fontSize: 24,
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  product: {
    width: Dimensions.get('window').width / 2 - 50,
  },
});
export default ListProduct;
