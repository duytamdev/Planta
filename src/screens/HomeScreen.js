import React, {useContext, useEffect, useState} from 'react';

import {
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {ColorsGlobal} from '../assets/ColorsGlobal';
import CompoItem from '../components/home/CompoItem';
import ListProduct from '../components/home/ListProduct';
import {ProductContext} from '../product/ProductContext';
import ProgressDialog from 'react-native-progress-dialog';
import Text from '../assets/TextMy';
import {Icon, withBadge} from 'react-native-elements';

const HomeScreen = ({navigation}) => {
  const {cart} = useContext(ProductContext);
  const [quantityOfCart, setQuantityOfCart] = useState(0);
  const BadgedIcon = withBadge(quantityOfCart)(Icon);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // do something
      setQuantityOfCart(cart.length);
    });
    return unsubscribe;
  },[navigation,cart])
  const SectionHeader = () => {
    return (
      <View>
        <View style={styles.sectionHeader}>
          <Text style={styles.textHeader}>
            Planta - toả sáng {'\n'}không gian nhà bạn
          </Text>
          <TouchableOpacity onPress={handleToCart}>
            <BadgedIcon size={36} type="ionicon" name="cart" />
            {/*<FeatherIcon name={'shopping-cart'} size={25} color={'#000'} />*/}
          </TouchableOpacity>
        </View>
        <ImageBackground
          style={styles.imageBackground}
          source={require('../assets/images/slider.png')}>
          <TouchableOpacity style={styles.sectionLogoContainer}>
            <Text style={styles.textSub}>Xem hàng mới về</Text>
            <FeatherIcon
              name={'arrow-right'}
              size={24}
              color={ColorsGlobal.main}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  };
  const SectionFooter = () => {
    return (
      <View style={[styles.sectionCompo, styles.paddingContainer]}>
        <Text style={styles.textHeader}> Combo chăm sóc (mới)</Text>
        <CompoItem />
      </View>
    );
  };

  const {onGetProductForHomePage} = useContext(ProductContext);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await onGetProductForHomePage();
      setData(res);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  const handleToCart = () => {
    navigation.navigate('Cart');
  };
  const handleRefreshing = () => {};
  return (
    <View style={styles.container}>
      <ProgressDialog visible={isLoading} />
      <FlatList
        onRefresh={handleRefreshing}
        refreshing={isRefreshing}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item._id}
        ListHeaderComponent={SectionHeader}
        ListFooterComponent={SectionFooter}
        data={data}
        renderItem={({item}) => {
          return (
            <ListProduct
              navigation={navigation}
              products={item.products}
              name={item.name}
            />
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  sectionTreesContainer: {
    marginTop: 25,
  },
  paddingContainer: {
    paddingHorizontal: 25,
  },
  sectionLogoContainer: {
    marginTop: 15,
    marginHorizontal: 25,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textSub: {
    color: ColorsGlobal.main,
    fontSize: 16,
    marginRight: 9,
  },
  imageBackground: {
    height: 185,
    flexDirection: 'row',
  },
  textHeader: {
    color: '#000',
    fontSize: 24,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionHeader: {
    alignItems: 'center',
    paddingTop: 31,
    paddingHorizontal: 24,
    backgroundColor: '#F6F6F6',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default HomeScreen;
