import React, {useContext, useEffect, useState} from 'react';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import Text from '../assets/TextMy';
import Icon, {Icons} from '../assets/Icons';
import MySlide from '../components/detailProduct/MySlider';
import MyButton from '../components/common/MyButton';
import DetailsInfoProduct from '../components/detailProduct/DetailsInfoProduct';
import {ProductContext} from '../product/ProductContext';
import ProgressDialog from 'react-native-progress-dialog';

const DetailsProduct = ({route, navigation}) => {
  const {productId} = route.params;
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState(null);
  const [sumPrice, setSumPrice] = useState(0);
  const {onGetDetailInfoProduct, cart, setCart} = useContext(ProductContext);
  useEffect(() => {
    const fetchData = async () => {
      const res = await onGetDetailInfoProduct(productId);
      setProduct(res);
    };
    fetchData();
  }, []);
  if (!product) {
    return <ProgressDialog visible={true} />;
  }
  const handleChangeQuantity = isAdd => {
    if (isAdd) {
      setQuantity(pre => {
        setSumPrice(product.price * (pre + 1));
        return pre + 1;
      });
    } else {
      if (quantity >= 1) {
        setQuantity(pre => {
          setSumPrice(product.price * (pre - 1));
          return pre - 1;
        });
      }
    }
  };
  const handleBack = () => {
    navigation.goBack();
  };
  const handleGoCart = () => {
    navigation.navigate('Cart');
  };
  const handleUpdateCart = () => {
    const check = cart.filter(item => item.product._id === product._id);
    let temp = cart;

    if (check.length === 0) {
      // ko có sản phẩm trong giỏ hàng
      temp.push({
        product: product,
        quantity: quantity,
        price: product.price,
        checked: false,
      });
    } else {
      // có sản phẩm trông giỏ hàng
      temp = temp.map(item => {
        if ((item.product._id = product._id)) {
          item.quantity += quantity;
        }
        return item;
      });
    }
    setCart(temp);
    ToastAndroid.show('Đã thêm vào giỏ hàng', 2000);
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={handleBack}>
            <Icon
              type={Icons.MaterialIcons}
              name={'arrow-back-ios'}
              size={24}
              color={'#000'}
            />
          </TouchableOpacity>

          <Text numberOfLines={1} style={styles.textTitle}>
            {product && product.name}
          </Text>
          <TouchableOpacity onPress={handleGoCart}>
            <Icon
              type={Icons.Ionicons}
              name={'md-cart-outline'}
              size={24}
              color={'#000'}
            />
          </TouchableOpacity>
        </View>
        {product && (
          <View>
            <MySlide images1={product.images[0]} images2={product.images[1]} />
            <DetailsInfoProduct product={product} />
          </View>
        )}
      </ScrollView>
      <View style={styles.sectionBottom}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            paddingHorizontal: 25,
          }}>
          <View style={styles.quantityContainer}>
            <Text>{`Đã chọn ${quantity} sản phẩm`}</Text>
            <View style={styles.quantityControler}>
              <TouchableOpacity
                onPress={() => handleChangeQuantity(false)}
                style={styles.buttonQuantity}>
                <Text style={styles.textButtonQuantity}>-</Text>
              </TouchableOpacity>
              <Text style={styles.textQuantity}>{quantity}</Text>
              <TouchableOpacity
                onPress={() => handleChangeQuantity(true)}
                style={styles.buttonQuantity}>
                <Text style={styles.textButtonQuantity}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.sumControler}>
            <View style={{alignItems: 'flex-end'}}>
              <Text>Tạm Tính</Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={styles.textSumPrice}>{`${sumPrice}d`}</Text>
            </View>
          </View>
        </View>
        <MyButton
          onPress={handleUpdateCart}
          disabled={quantity <= 0}
          styleButton={
            quantity > 0 ? styles.buttonMain : styles.buttonMainDisabled
          }
          styleText={styles.textButton}
          styleContainer={styles.button}
          title={'Chọn Mua'}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  scrollContainer: {
    marginBottom: 150,
  },
  textSumPrice: {
    fontWeight: '500',
    color: '#000',
    fontSize: 22,
  },
  textQuantity: {fontWeight: '500', color: '#000'},
  buttonMain: {
    backgroundColor: '#007537',
  },
  buttonMainDisabled: {
    backgroundColor: '#ABABAB',
  },
  textButton: {
    color: '#fff',
  },
  button: {
    marginHorizontal: 25,
    marginTop: 8,
    borderRadius: 8,
  },
  sumControler: {
    justifyContent: 'center',
  },
  textButtonQuantity: {
    fontSize: 18,
    color: '#000',
  },
  buttonQuantity: {
    borderColor: '#3A3A3A',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
  },
  quantityControler: {
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionBottom: {
    position: 'absolute',
    bottom: 16,
    marginTop: 32,
    width: '100%',
  },
  text: {
    fontSize: 18,
  },

  sectionHeader: {
    color: '#3A3A3A',
    fontSize: 20,
    paddingBottom: 5,
    borderBottomColor: '#3A3A3A',
    borderBottomWidth: 1,
  },
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 15,
    alignItems: 'center',
  },
  textTitle: {
    color: '#000',
    fontSize: 20,
    maxWidth: 220,
  },
});
export default DetailsProduct;
