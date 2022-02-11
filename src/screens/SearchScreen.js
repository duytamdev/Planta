import React, {useContext, useEffect, useState} from 'react';

import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ProductItemInSearch from '../components/search/ProductItemInSearch';
import SearchBar from '../components/search/SearchBar';
import ProgressDialog from 'react-native-progress-dialog';

import {ProductContext} from '../product/ProductContext';
const SearchScreen = ({navigation}) => {
  const [productsFilter, setProductsFilter] = useState([]);
  const [textSearch, setTextSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {onGetProductByName} = useContext(ProductContext);
  useEffect(() => {
    const fetchData = async () => {
      const res = await onGetProductByName(textSearch);
      setProductsFilter(res);
    };
    fetchData();
  }, [textSearch]);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await onGetProductByName('');
      setProductsFilter(res);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <ProgressDialog visible={isLoading} />
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
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate('DetailsProduct', {productId: item._id})
                }>
                <ProductItemInSearch
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  description={item.madein}
                  image={{uri: item.images[0]}}
                />
              </TouchableOpacity>
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
