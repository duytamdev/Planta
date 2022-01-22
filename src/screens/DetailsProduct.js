import React, {useState} from 'react';

import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon, {Icons} from '../components/Icons';
import MySlide from '../components/MySlider';
import {ColorsGlobal} from '../assets/ColorsGlobal';
import MyButton from '../components/MyButton';

const DetailsProduct = ({route, navigation}) => {
  const {product} = route.params;
  const [quantity, setQuantity] = useState(1);
  const [sumPrice, setSumPrice] = useState(product.price);
  const handleChangeQuantity = isAdd => {
    if (isAdd) {
      setQuantity(pre => {
        setSumPrice(product.price * pre + 1);
        return pre + 1;
      });
    } else {
      if (quantity >= 1) {
        setQuantity(pre => {
          setSumPrice(product.price * pre - 1);

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
  console.log(product);
  return (
    <View style={styles.container}>
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
          {product.name}
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
      <MySlide images1={product.images[0]} images2={product.images[1]} />
      <View style={styles.sectionMain}>
        <Text numberOfLines={2} style={styles.nameProduct}>
          {product.name}
        </Text>
        <Text style={styles.priceProduct}>{`${product.price} VNĐ`}</Text>
        <View style={styles.sectionInfo}>
          <Text style={styles.sectionHeader}>Chi tiết sản phẩm</Text>
          <View style={styles.viewInfo}>
            <Text style={styles.text}>Kích cỡ</Text>
            <Text style={styles.text}>{product.size}</Text>
          </View>
          <View style={styles.viewInfo}>
            <Text style={styles.text}>Xuất Xứ</Text>
            <Text style={styles.text}>{product.madein}</Text>
          </View>
          <View style={styles.viewInfo}>
            <Text style={styles.text}>Tình Trạng</Text>
            <Text
              style={styles.text}>{`Còn ${product.quantity} sản phẩm`}</Text>
          </View>
        </View>
      </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionBottom: {
    marginTop: 32,
  },
  text: {
    fontSize: 18,
  },
  viewInfo: {
    borderBottomColor: '#3A3A3A',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
    marginTop: 15,
  },
  sectionHeader: {
    color: '#3A3A3A',
    fontSize: 20,
    paddingBottom: 5,
    borderBottomColor: '#3A3A3A',
    borderBottomWidth: 1,
  },
  sectionInfo: {
    marginTop: 17,
  },
  nameProduct: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 36,
  },
  priceProduct: {
    color: ColorsGlobal.main,
    fontWeight: '500',
    fontSize: 25,
  },
  sectionMain: {
    paddingHorizontal: 25,
  },
  container: {
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
