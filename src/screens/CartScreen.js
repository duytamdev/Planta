import React, {useContext, useEffect, useState} from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import ProductItemInCart from '../components/cart/ProductItemInCart';
import Icon, {Icons} from '../assets/Icons';
import {ColorsGlobal} from '../assets/ColorsGlobal';
import {ProductContext} from '../product/ProductContext';

const Header = ({onBack, isShowRight, onClickDeleteAll}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onBack}>
        <Icon
          type={Icons.MaterialIcons}
          name={'arrow-back-ios'}
          color={'#000'}
          size={24}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>GIỎ HÀNG</Text>
      <View>
        {isShowRight ? (
          <TouchableOpacity onPress={onClickDeleteAll}>
            <Icon
              type={Icons.Feather}
              name={'trash-2'}
              color={'#000'}
              size={24}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};
const CartScreen = ({navigation}) => {
  const {cart, setCart} = useContext(ProductContext);
  const [data, setData] = useState(cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleClearCart = () => {
    setCart([]);
    setData([]);
  };
  console.log(data);
  useEffect(() => {
    let total = data.reduce((accumulator, product) => {
      // select product checked
      if (product.checked) {
        return accumulator + product.quantity * product.price;
      }
      return accumulator;
    }, 0);
    setTotalPrice(total);
  }, [data]);
  const handleDeleteAll = () => {
    Alert.alert('Xác nhận', 'Xoá tất cả trong giỏ hàng ?', [
      {
        text: 'Huỷ',
        style: 'cancel',
      },
      {text: 'Xoá', onPress: handleClearCart},
    ]);
  };
  return (
    <View style={styles.container}>
      <Header
        onClickDeleteAll={handleDeleteAll}
        isShowRight={data.length > 0}
        onBack={() => navigation.goBack()}
      />
      {data.length > 0 ? (
        <FlatList
          style={styles.flatList}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item._id}
          data={data}
          renderItem={({item}) => {
            return (
              <ProductItemInCart
                onChangeChecked={{}}
                checked={item.checked}
                price={item.price}
                name={item.product.name}
                madein={item.product.madein}
                image={{uri: item.product.images[0]}}
                quantity={item.quantity}
                style={styles.item}
              />
            );
          }}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.text}>Giỏ hàng của bạn hiện đang trống!</Text>
        </View>
      )}
      {data.length > 0 && (
        <View style={styles.totalContainer}>
          <View style={styles.totalView}>
            <Text>Tạm tính</Text>
            <Text style={styles.totalPrice}>{`${totalPrice}d`}</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Payment')}
            style={styles.totalButton}>
            <Text style={styles.textTotalButton}>Tiến thành thanh toán</Text>
            <Icon
              type={Icons.AntDesign}
              name={'arrowright'}
              color={'#fff'}
              size={24}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  totalPrice: {
    fontSize: 22,
    color: ColorsGlobal.main,
    fontWeight: '500',
  },
  flatList: {
    marginBottom: 130,
  },
  textTotalButton: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 20,
  },
  totalButton: {
    marginTop: 11,
    flexDirection: 'row',
    backgroundColor: ColorsGlobal.main,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    marginLeft: 16,
  },
  totalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  text: {
    color: '#000',
    fontWeight: '400',
    fontSize: 16,
  },
  emptyContainer: {
    alignItems: 'center',
  },
  headerText: {
    color: '#000',
    fontWeight: '400',
    fontSize: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    alignItems: 'center',
  },
  item: {
    marginTop: 16,
  },
});
export default CartScreen;
