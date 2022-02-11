import React from 'react';

import {View, StyleSheet, Image} from 'react-native';
import Text from '../../assets/TextMy';

const ProductItemInSearch = ({
  style,
  name,
  price,
  description,
  quantity,
  image,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Image style={styles.image} source={image} />
      <View style={styles.content}>
        <View style={styles.containerName}>
          <Text numberOfLines={1} ellipsizeMode={'tail'} style={[styles.text,{maxWidth: 200}]}>{name}</Text>
          <Text style={styles.text}> | {description}</Text>
        </View>
        <Text style={styles.text}>{`${price} đ`}</Text>
        <Text style={styles.quantity}>{`Còn ${quantity} sp`}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    padding: 8,
  },
  image: {
    width: 77,
    height: 77,
    borderRadius: 8,
    maxWidth: 77,
    maxHeight: 77,
    marginHorizontal: 15,
  },
  text: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantity: {
    color: '#000',
    fontSize: 16,
  },
  containerName: {
    flexDirection: 'row',
    maxWidth: 250,
  },
});
export default ProductItemInSearch;
