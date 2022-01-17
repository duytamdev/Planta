import React, {useState} from 'react';

import {FlatList, StyleSheet, Text, View} from 'react-native';
import ProductItemInSearch from '../components/ProductItemInSearch';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [products, setProducts] = useState([
    {
      image: require('../assets/images/grow-kit-main_540x.png'),
      name: 'Panse Đen',
      description: 'Hybrid',
      price: 50000,
      quantity: 25,
    },
    {
      image: require('../assets/images/grow-kit-main_540x.png'),
      name: 'Panse Tím',
      description: 'Hybrid',
      price: 70000,
      quantity: 35,
    },
    {
      image: require('../assets/images/grow-kit-main_540x.png'),
      name: 'Panse Vàng',
      description: 'Hybrid',
      price: 40000,
      quantity: 25,
    },
    {
      image: require('../assets/images/grow-kit-main_540x.png'),
      name: 'Panse Xanh',
      description: 'Hybrid',
      price: 30000,
      quantity: 25,
    },
    {
      image: require('../assets/images/grow-kit-main_540x.png'),
      name: 'Panse Đỏ',
      description: 'Hybrid',
      price: 80000,
      quantity: 25,
    },
  ]);
  const [productsFilter, setProductsFilter] = useState(products);

  const [textSearch, setTextSearch] = useState('');
  const handleSearch = value => {
    setTextSearch(pre => {
      setProductsFilter(
        products.filter(product => {
          if (value === '') {
            return products;
          } else {
            return product.name.toLowerCase().includes(value.toLowerCase());
          }
        }),
      );
      return value;
    });
  };
  return (
    <View style={styles.container}>
      <SearchBar
        onPressSearch={() => handleSearch(textSearch)}
        value={textSearch}
        onChangeText={value => handleSearch(value)}
        style={styles.searchBar}
        placeholder={'Tên sản phẩm'}
      />

      <FlatList
        data={productsFilter}
        renderItem={({item, index}) => {
          return (
            <ProductItemInSearch
              key={index}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              description={item.description}
              image={item.image}
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
  searchBar: {
    marginBottom: 20,
  },
});
export default SearchScreen;
