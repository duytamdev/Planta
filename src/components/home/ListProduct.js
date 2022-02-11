import React from 'react';

import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Text from '../../assets/TextMy';

import ProductItem from './ProductItem';

const ListProduct = ({name, products, navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>{name}</Text>
      <View style={styles.productsContainer}>
        {products &&
          products.map(product => {
            return (
              <TouchableOpacity
                key={product._id}
                style={styles.product}
                onPress={() =>
                  navigation.navigate('DetailsProduct', {
                    productId: product._id,
                  })
                }>
                <ProductItem
                  madein={product.madein}
                  name={product.name}
                  price={product.price}
                  image={{uri: product.images[0]}}
                />
              </TouchableOpacity>
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
  },
  textHeader: {
    color: '#000',
    fontSize: 24,
    marginStart: 16,
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  product: {
    width: Dimensions.get('window').width / 2 - 30,
  },
});
export default ListProduct;
