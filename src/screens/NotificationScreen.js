import React, {useState} from 'react';

import {Text, View, StyleSheet, FlatList} from 'react-native';
import ProductItemNotification from '../components/ProductItemNotification';

const NotificationScreen = () => {
  const [notfications, setNotfications] = useState([
    {
      date: 'Thứ 4, 27/04/2022',
      status: 'Đặt hàng thành công',
      product: {
        image: require('../assets/images/grow-kit-main_540x.png'),
        name: 'Spider plant',
        description: 'ưu bông',
      },
      quantity: 2,
    },
    {
      date: 'Thứ 5, 87/04/2022',
      status: 'Đặt hàng thành công',
      product: {
        image: require('../assets/images/grow-kit-main_540x.png'),
        name: 'Spider plant x',
        description: 'ưu bông',
      },
      quantity: 3,
    },

    {
      date: 'Thứ 6, 29/04/2022',
      status: 'Đặt hàng thành công',
      product: {
        image: require('../assets/images/grow-kit-main_540x.png'),
        name: 'Spider plant 2',
        description: 'ưu bông',
      },
      quantity: 1,
    },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        data={notfications}
        renderItem={({item, index}) => {
          return (
            <ProductItemNotification
              date={item.date}
              status={item.status}
              image={item.product.image}
              name={item.product.name}
              quantity={item.quantity}
              description={item.product.description}
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
    backgroundColor: '#fff',
  },
});
export default NotificationScreen;
