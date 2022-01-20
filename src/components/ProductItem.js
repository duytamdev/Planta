import React from 'react';

import {Text, View, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import {ColorsGlobal} from '../assets/ColorsGlobal';
const WIDTH = Dimensions.get('screen').width;

const ProductItem = ({image, name, madein, price, style}) => {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Image source={image} style={styles.image} />
      <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.name}>
        {name}
      </Text>
      <Text>{madein}</Text>
      <Text style={styles.price}>{price} vnd</Text>
    </TouchableOpacity>
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
    margin: 15,
  },
  image: {
    width: 155,
    height: 134,
  },
});
export default ProductItem;
