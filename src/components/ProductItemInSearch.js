import React from 'react';

import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const ProductItemInSearch = ({style,name,price,description,quantity,image}) => {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Image
        style={styles.image}
        source={image}
      />
      <View style={styles.content}>
        <View style={styles.containerName}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}> | {description}</Text>
        </View>
        <Text style={styles.text}>{`${price} đ`}</Text>
        <Text style={styles.quantity}>{`Còn ${quantity} sp`}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingStart: 15,
    alignContent: 'center',
    padding: 8,
  },
  image: {
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
  },
});
export default ProductItemInSearch;
