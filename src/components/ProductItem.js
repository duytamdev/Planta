import React from 'react';

import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import {ColorsGlobal} from '../assets/ColorsGlobal';
const WIDTH = Dimensions.get('screen').width;

const ProductItem = ({image, name, description, price, style}) => {
  return (
    <View style={[styles.container, styles]}>
      <Image styles={styles.image} source={image} />
      <Text style={styles.name}>{name}</Text>
      <Text>{description}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  price: {
    color: ColorsGlobal.main,
    fontSize: 16,
  },
  name: {
    marginTop: 4,
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  container: {
    backgroundColor: '#fff',
    maxWidth: WIDTH / 2 - 30,
      margin: 15,
  },
  image: {
    width: '100%',
  },
});
export default ProductItem;
