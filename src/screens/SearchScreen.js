import React, {useContext, useEffect, useState} from 'react';

import {FlatList, StyleSheet, Text, View} from 'react-native';
import ProductItemInSearch from '../components/search/ProductItemInSearch';
import SearchBar from '../components/search/SearchBar';
import {ProductContext} from '../product/ProductContext';
const SearchScreen = () => {
  const [productsFilter, setProductsFilter] = useState([]);

  const [textSearch, setTextSearch] = useState('');
  const {onGetProductByName} = useContext(ProductContext);
  useEffect(() => {
    const fetchData = async () => {
      const res = await onGetProductByName(textSearch);
      setProductsFilter(res);
    };
    fetchData();
  }, [textSearch]);
  return (
    <View style={styles.container}>
      <SearchBar
        value={textSearch}
        onChangeText={value => setTextSearch(value)}
        style={styles.searchBar}
        placeholder={'Tên sản phẩm'}
      />
      {productsFilter.length > 0 ? (
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
      ) : (
        <View style={styles.contextEmpty}>
          <Text style={styles.textEmpty}>Không tìm thấy sản phẩm !</Text>
        </View>
      )}
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
  contextEmpty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textEmpty: {
    fontSize: 20,
  },
});
export default SearchScreen;
