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
import CompoItem from '../components/CompoItem';
import {productForHome} from '../api/PlantaAPI';
import ListProduct from '../components/ListProduct';
const HomeScreen = ({navigation}) => {
  const [data, setData] = useState(productForHome.data);
  const handleToCart = () => {
    navigation.navigate('Cart');
  };
  return (
    <ScrollView
      nestedScrollEnabled={true}
      showsVerticalScrollIndicator={false}
      style={styles.container}>
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
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return <ListProduct products={item.products} name={item.name} />;
        }}
      />
      <View style={[styles.sectionCompo, styles.paddingContainer]}>
        <Text style={styles.textHeader}> Combo chăm sóc (mới)</Text>
        <CompoItem />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  sectionCompo: {},
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
