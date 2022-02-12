import React, {useContext, useEffect, useState} from 'react';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
  ToastAndroid,
} from 'react-native';
import Text from '../assets/TextMy';
import ProductItemInCart from '../components/cart/ProductItemInCart';
import Icon, {Icons} from '../assets/Icons';
import {
  ColorsGlobal as GlobalColor,
  ColorsGlobal,
} from '../assets/ColorsGlobal';
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
  const [totalPrice, setTotalPrice] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const reloadData = () => {
    setRefreshing(true);
    setRefreshing(false);
  };
  const handleClearCart = () => {
    setCart([]);
  };
  useEffect(() => {
    if (cart && cart.length > 0) {
      let total = cart.reduce((accumulator, product) => {
        // select product checked
        if (product.checked) {
          return accumulator + product.quantity * product.price;
        }
        return accumulator;
      }, 0);
      setTotalPrice(total);
    }
  }, [cart]);
  const handleDeleteAll = () => {
    Alert.alert('Xác nhận', 'Xoá tất cả trong giỏ hàng ?', [
      {
        text: 'Huỷ',
        style: 'cancel',
      },
      {text: 'Xoá', onPress: handleClearCart},
    ]);
  };
  const handleDeleteItem = itemID => {
    Alert.alert('Xác nhận', 'Xoá khỏi giỏ hàng ?', [
      {
        text: 'Huỷ',
        style: 'cancel',
      },
      {
        text: 'Xoá',
        onPress: () => {
          const newData = cart.filter(item => item.product._id !== itemID);
          setCart(newData);
        },
      },
    ]);
  };
  const handleUpdateQuantity = (idItem, isAdd) => {
    const newData = cart.map(item => {
      if (item.product._id === idItem) {
        if (item.quantity <= 1 && isAdd === false) {
          return {
            ...item,
          };
        }
        return {
          ...item,
          quantity: isAdd ? item.quantity + 1 : item.quantity - 1,
        };
      }
      return {
        ...item,
      };
    });
    setCart(newData);
  };
  const handleCheckedItem = idItem => {
    const newData = cart.map(item => {
      if (item.product._id === idItem) {
        return {
          ...item,
          checked: !item.checked,
        };
      }
      return {
        ...item,
      };
    });
    setCart(newData);
  };
  const handleToPayment = () => {
    navigation.navigate('Payment', {totalPriceCart: totalPrice});
  };
  const toastWhenEmptyCart = () => {
    ToastAndroid.show('Hãy tích vào những sản phẩm bạn muốn mua!',2000);
  };
  return (
    <View style={styles.container}>
      <Header
        onClickDeleteAll={handleDeleteAll}
        isShowRight={cart.length > 0}
        onBack={() => navigation.goBack()}
      />
      {cart.length > 0 ? (
        <FlatList
          onRefresh={reloadData}
          refreshing={refreshing}
          style={styles.flatList}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item._id}
          data={cart}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                key={item._id}
                onPress={() =>
                  navigation.navigate('DetailsProduct', {
                    productId: item.product._id,
                  })
                }>
                <ProductItemInCart
                  onAddQuantity={() =>
                    handleUpdateQuantity(item.product._id, true)
                  }
                  onMinusQuantity={() =>
                    handleUpdateQuantity(item.product._id, false)
                  }
                  onRemove={() => handleDeleteItem(item.product._id)}
                  onChangeChecked={() => handleCheckedItem(item.product._id)}
                  checked={item.checked}
                  price={item.price}
                  name={item.product.name}
                  madein={item.product.madein}
                  image={{uri: item.product.images[0]}}
                  quantity={item.quantity}
                  style={styles.item}
                />
              </TouchableOpacity>
            );
          }}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.text}>Giỏ hàng của bạn hiện đang trống!</Text>
        </View>
      )}
      {cart.length > 0 && (
        <View style={styles.totalContainer}>
          <View style={styles.totalView}>
            <Text>Tạm tính</Text>
            <Text style={styles.totalPrice}>{`${totalPrice}d`}</Text>
          </View>

          <TouchableOpacity
            onPress={totalPrice > 0 ? handleToPayment : toastWhenEmptyCart}
            style={[
              styles.totalButton,
              {backgroundColor: totalPrice <= 0 ? '#ABABAB' : GlobalColor.main},
            ]}>
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
