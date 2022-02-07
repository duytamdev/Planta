import React, {useState} from 'react';

import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {ColorsGlobal} from '../assets/ColorsGlobal';
import CompoItem from '../components/home/CompoItem';
import {productForHome} from '../api/PlantaAPI';
import ListProduct from '../components/home/ListProduct';

const HomeScreen = ({navigation}) => {
  const SectionHeader = () => {
    return (
      <View>
        <View style={styles.sectionHeader}>
          <Text style={styles.textHeader}>
            Planta - toả sáng {'\n'}không gian nhà bạn
          </Text>
          <TouchableOpacity onPress={handleToCart}>
            <FeatherIcon name={'shopping-cart'} size={25} color={'#000'} />
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
  const [data, setData] = useState(productForHome.data);
  const handleToCart = () => {
    navigation.navigate('Cart');
  };
  return (
    <View style={styles.container}>
      <FlatList
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
