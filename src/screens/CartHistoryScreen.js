import React, {useContext, useEffect, useState} from 'react';

import {View, StyleSheet, Dimensions, FlatList} from 'react-native';
import CartHistoryItem from '../components/cart/CartHistoryItem';
import {ProductContext} from '../product/ProductContext';
const displayDay = day => {
  switch (day) {
    case 0:
      return 'Chủ nhật';
    case 1:
      return 'Thứ hai';
    case 2:
      return 'Thứ ba';
    case 4:
      return 'Thứ tư';
    case 5:
      return 'Thứ năm';
    case 6:
      return 'Thứ sáu';
    case 7:
      return 'Thứ bảy';
    default:
      break;
  }
};
const displayTime = time => {
  time = new Date(time);
  const day = displayDay(time.getDay());
  const date = time.getDate() < 10 ? '0' + time.getDate() : time.getDate();
  const month =
    time.getMonth() + 1 < 10 ? '0' + time.getMonth() + 1 : time.getMonth() + 1;
  const year = time.getFullYear();
  return `${day} ${date}/${month}/${year}`;
};
const CartHistoryScreen = () => {
  const {onGetProductInCartHistory} = useContext(ProductContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await onGetProductInCartHistory();
      setData(res);
    };
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <CartHistoryItem
              total={item.total}
              status={item.status}
              quantity={item.products.length}
              date={displayTime(item.createdAt)}
              style={styles.item}
            />
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  item: {
    width: Dimensions.get('window').width - 96,
    marginTop: 32,
  },
});
export default CartHistoryScreen;
