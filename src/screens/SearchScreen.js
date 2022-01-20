import React, {useState} from 'react';

import {FlatList, StyleSheet, Text, View} from 'react-native';
import ProductItemInSearch from '../components/ProductItemInSearch';
import SearchBar from '../components/SearchBar';
import {productForHome} from '../api/PlantaAPI';

const SearchScreen = () => {
  const [products, setProducts] = useState(productForHome.data[0].products);
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
              description={item.madein}
              image={{uri: item.images[0]}}
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
