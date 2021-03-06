import React from 'react';

import {
  View,
  StyleSheet,
  Image,
} from 'react-native';
import {ColorsGlobal} from '../../assets/ColorsGlobal';
import Text from '../../assets/TextMy';


const ProductItem = ({image, name, madein, price, style, ...props}) => {
  return (
    <View {...props} style={[styles.container, style]}>
      <Image source={image} style={styles.image} />
      <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.name}>
        {name}
      </Text>
      <Text>{madein}</Text>
      <Text style={styles.price}>{price} vnd</Text>
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
    margin: 15,
  },
  image: {
    width: 155,
    height: 134,
  },
});
export default ProductItem;
