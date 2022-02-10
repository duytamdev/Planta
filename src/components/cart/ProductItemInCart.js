import React, {useState} from 'react';

import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {ColorsGlobal as GlobalColor} from '../../assets/ColorsGlobal';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
const ProductItemInCart = ({
  style,
  image,
  name,
  madein,
  price,
  checked,
  quantity,
  onChangeChecked,
}) => {
  // const handleChangeQuantity = isAdd => {
  //   if (isAdd) {
  //     setQuantity(quantity + 1);
  //   } else {
  //     if (quantity > 0) {
  //       setQuantity(quantity - 1);
  //     }
  //   }
  // };
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Checkbox
        onPress={onChangeChecked}
        color={GlobalColor.main}
        status={checked ? 'checked' : 'unchecked'}
      />
      <Image source={image} style={styles.image} />
      <View style={{flex: 1}}>
        <View style={styles.nameContainer}>
          <Text numberOfLines={1} style={styles.name}>{`${name} |`}</Text>
          <Text style={styles.description}>{madein}</Text>
        </View>
        <Text style={styles.price}>{`${price}đ`}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity>
            <AntDesignIcon name={'minussquareo'} size={24} color={'#000'} />
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity>
            <AntDesignIcon name={'plussquareo'} size={24} color={'#000'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.removeTextContainer}>
            <Text style={styles.removeText}>Xoá</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 77,
    height: 77,
    borderRadius: 5,
    marginHorizontal: 15,
  },
  nameContainer: {
    flexDirection: 'row',
  },
  price: {
    color: GlobalColor.main,
    fontSize: 16,
    fontWeight: '500',
  },
  name: {
    fontSize: 16,
    color: '#000',
    maxWidth: 200,
    fontWeight: '500',
  },
  description: {
    fontSize: 16,
    color: GlobalColor.gray,
  },
  quantityContainer: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    borderWidth: 2,
    borderColor: '#000',
    padding: 4,
  },
  quantity: {
    marginHorizontal: 8,
    color: '#000',
  },
  removeText: {
    color: '#000',
    textDecorationLine: 'underline',
    fontSize: 18,
    fontWeight: '500',
  },
  removeTextContainer: {
    flexGrow: 1,
    marginStart: 16,
    alignItems: 'flex-end',
  },
});
export default ProductItemInCart;
