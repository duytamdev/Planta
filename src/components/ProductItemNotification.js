import React from 'react';

import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {ColorsGlobal as GlobalColor} from '../assets/ColorsGlobal';
import Line from './Line';

const ProductItemNotification = ({
  date,
  image,
  status,
  name,
  quantity,
  description,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.date}>{date}</Text>
        <Line />
      </View>
      <View style={styles.content}>
        <Image style={styles.image} source={image} />
        <View>
          <Text style={styles.textStatus}>{status}</Text>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{`${name} |`}</Text>
            <Text style={styles.description}> {description}</Text>
          </View>
          <Text style={styles.quantity}>{`${quantity} sản phẩm`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 32,
  },
  content: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {},
  image: {
    width: 77,
    height: 74,
    borderRadius: 5,
    marginEnd: 15,
  },
  textStatus: {
    color: GlobalColor.main,
    fontWeight: '500',
    fontSize: 16,
  },
  nameContainer: {
    flexDirection: 'row',
  },
  name: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 14,
  },
  description: {
    color: GlobalColor.gray,
    fontSize: 14,
  },
  date: {
    color: '#000',
    fontSize: 16,
  },
  quantity: {
    color: '#000',
  },
});
export default ProductItemNotification;
