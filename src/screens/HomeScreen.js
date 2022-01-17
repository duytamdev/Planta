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
import ProductItem from '../components/ProductItem';
import CompoItem from '../components/CompoItem';
const HomeScreen = ({navigation}) => {
  const [trees, setTrees] = useState([
    {
      name: 'Spider paint',
      description: 'Ua Bong',
      price: 25000,
      image: require('../assets/images/tree.png'),
    },
    {
      name: 'Planta While',
      description: 'Ua Sang',
      price: 28000,
      image: require('../assets/images/tree.png'),
    },
    {
      name: 'Spider paint',
      description: 'Ua Bong',
      price: 25000,
      image: require('../assets/images/tree.png'),
    },
    {
      name: 'Spider paint',
      description: 'Ua Bong',
      price: 25000,
      image: require('../assets/images/tree.png'),
    },
    {
      name: 'Spider paint',
      description: 'Ua Bong',
      price: 25000,
      image: require('../assets/images/tree.png'),
    },
    {
      name: 'Planta While',
      description: 'Ua Sang',
      price: 28000,
      image: require('../assets/images/tree.png'),
    },
  ]);
  const handleToCart = () => {
    navigation.navigate('Cart');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
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
      <View style={[styles.paddingContainer, styles.sectionTreesContainer]}>
        <Text style={styles.textHeader}>Cây Trồng</Text>
        <FlatList
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          data={trees}
          renderItem={({item}) => {
            return (
              <TouchableOpacity>
                <ProductItem
                  name={item.name}
                  image={item.image}
                  description={item.description}
                  price={item.price}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={[styles.paddingContainer, styles.sectionTreesContainer]}>
        <Text style={styles.textHeader}>Chậu Cây Trồng</Text>
        <FlatList
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          data={trees}
          renderItem={({item}) => {
            return (
              <TouchableOpacity>
                <ProductItem
                  name={item.name}
                  image={item.image}
                  description={item.description}
                  price={item.price}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
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
