import React from 'react';

import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  ColorsGlobal as GlobalColor,
  ColorsGlobal,
} from '../../assets/ColorsGlobal';

const CartHistoryItem = ({style, date, status, quantity, total}) => {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.textStatus}>{`Trạng thái: ${status}`}</Text>
      <Text style={styles.text}>{`Tổng sản phẩm: ${quantity}`}</Text>
      <Text style={styles.text}>{`Tổng tiền: ${total}`}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  date: {
    color: '#000',
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: ColorsGlobal.gray,
    paddingBottom: 5,
    marginBottom: 8,
  },
  textStatus: {
    color: GlobalColor.main,
    fontWeight: '500',
    fontSize: 16,
  },
  text: {
    color: '#000',
  },
});
export default CartHistoryItem;
