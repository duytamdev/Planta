import React, {useContext, useEffect, useState} from 'react';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import MyInput from '../components/common/MyInput';
import {ColorsGlobal} from '../assets/ColorsGlobal';
import MyIcon, {MyIcons} from '../assets/MyIcons';
import MyButton from '../components/common/MyButton';
import Text from '../assets/TextMy';
import {ProductContext} from '../product/ProductContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
const displayTime = () => {
  const time = new Date(Date.now());
  const date = time.getDate() < 10 ? '0' + time.getDate() : time.getDate();
  const month =
    time.getMonth() + 1 < 10 ? '' + time.getMonth() + 1 : time.getMonth() + 1;
  return `${date}-${date + 4}/${month}`;
};
const PaymentScreen = ({navigation, route}) => {
  const {totalPriceCart} = route.params;
  const shippingFee = 15000;
  const total = totalPriceCart + shippingFee;
  const [modalVisible, setModalVisible] = useState(false);
  const {cart, setCart, onSaveCart} = useContext(ProductContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      await AsyncStorage.getItem('dataUser', (err, value) => {
        if (err) {
          console.log(err);
        } else {
          const data = JSON.parse(value);
          setName(data.name);
          setAddress(data.address);
          setEmail(data.email);
          setPhone(data.phone);
        }
      });
    };
    fetchData();
  }, []);
  const handleOrder = () => {
    setModalVisible(!modalVisible);
    navigation.navigate('OrderSuccess');
    handleSaveCart();
  };
  const handleSaveCart = async () => {
    let total = cart.reduce((accumulator, product) => {
      // select product checked
      if (product.checked) {
        return accumulator + product.quantity * product.price;
      }
      return accumulator;
    }, 0);
    //select product checked
    let products = cart.map(item => {
      if (item.checked) {
        return {
          product: item.product._id,
          quantity: item.quantity,
          price: item.price,
        };
      }
    });
    // post to server
    const res = await onSaveCart({total: total, products: products});
    console.log(res);
    // clear item ordered
    const newCart = cart.filter(item => !item.checked);
    setCart(newCart);
  };
  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.textHeader}>Th??ng tin kh??ch h??ng</Text>
        <MyInput
          styleInput={styles.textInputBlur}
          value={name}
          onChangeText={value => setName(value)}
          placeholder="H??? v?? t??n"
        />
        <MyInput
          styleInput={styles.textInputBlur}
          value={email}
          onChangeText={() =>
            ToastAndroid.show('B???n kh??ng th??? thay ?????i email', 2000)
          }
          placeholder="Email"
        />
        <MyInput
          styleInput={styles.textInputBlur}
          value={address}
          onChangeText={value => setAddress(value)}
          placeholder="?????a ch???"
        />
        <MyInput
          maxLength={10}
          keyboardType="numeric"
          styleInput={styles.textInputBlur}
          value={phone}
          onChangeText={value => setPhone(value)}
          placeholder="S??? ??i???n tho???i"
        />
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.textHeader}>Ph????ng th???c v???n chuy???n</Text>
        <TouchableOpacity style={[styles.formMoveContainer, styles.lineBottom]}>
          <View>
            <Text style={styles.textPrimary}>Giao h??ng nhanh - 15.000??</Text>
            <Text style={styles.text}>
              {`D??? ki???n giao h??ng ${displayTime()}`}{' '}
            </Text>
          </View>
          <MyIcon
            type={MyIcons.Feather}
            name={'check'}
            size={24}
            color={ColorsGlobal.main}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.textHeader}>H??nh th???c thanh to??n</Text>
        <TouchableOpacity style={[styles.formMoveContainer, styles.lineBottom]}>
          <Text style={styles.textPrimary}>Thanh to??n khi nh???n h??ng - COD</Text>
          <MyIcon
            type={MyIcons.Feather}
            name={'check'}
            size={24}
            color={ColorsGlobal.main}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            ToastAndroid.show('T??nh n??ng ??ang ???????c ph??t tri???n', 2000)
          }
          style={[styles.formMoveContainer, styles.lineBottom]}>
          <Text style={styles.text}>Th??? VISA/MASTERCARD</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sectionBottom}>
        <View style={styles.viewRow}>
          <Text style={styles.text}>T???m t??nh</Text>
          <Text style={styles.text}>{`${totalPriceCart}d`}</Text>
        </View>
        <View style={styles.viewRow}>
          <Text style={styles.text}>Ph?? v???n chuy???n</Text>
          <Text style={styles.text}>{`${shippingFee}d`}</Text>
        </View>
        <View style={styles.viewRow}>
          <Text style={[styles.text2]}>T???ng c???ng</Text>
          <Text style={[styles.textPrimary, styles.text2]}>{`${total}d`}</Text>
        </View>
        <MyButton
          onPress={() => setModalVisible(true)}
          styleContainer={styles.buttonContainer}
          styleText={styles.textButton}
          styleButton={styles.button}
          title={'Ti???p t???c'}
        />
      </View>
      <Modal animationType="slide" visible={modalVisible} transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalContent}>
            <Text style={[styles.text, styles.textInputFocus]}>
              X??c nh???n thanh to??n?
            </Text>
            <MyButton
              onPress={handleOrder}
              title={'?????ng ??'}
              styleText={[styles.text, styles.textButton]}
              styleContainer={[
                styles.buttonContainer,
                {marginTop: 16, marginBottom: 16},
              ]}
              styleButton={[styles.button]}
            />
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Text
                style={[
                  styles.text,
                  styles.textInputFocus,
                  styles.lineBottom,
                  {paddingBottom: 2},
                ]}>
                Hu??? b???
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 8,
    backgroundColor: 'rgba(119,119,119,0.5)',
  },
  modalContent: {
    borderRadius: 8,
    paddingHorizontal: 45,
    width: '100%',
    height: (Dimensions.get('window').height * 25) / 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 8,
    width: '100%',
  },
  textButton: {
    color: '#fff',
  },
  button: {
    backgroundColor: ColorsGlobal.main,
    borderRadius: 8,
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionBottom: {
    marginTop: 20,
    position: 'absolute',
    bottom: 30,
    width: '100%',
    left: 48,
  },
  lineBottom: {
    borderBottomWidth: 1,
    borderBottomColor: ColorsGlobal.gray,
    paddingBottom: 5,
  },
  textPrimary: {
    color: ColorsGlobal.main,
    fontSize: 18,
    fontWeight: '400',
  },
  text: {
    fontSize: 18,
  },
  text2: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  formMoveContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingHorizontal: 48,
    backgroundColor: '#fff',
    position: 'relative',
  },
  textInputBlur: {
    color: ColorsGlobal.gray,
  },
  textInputFocus: {
    color: '#000',
  },
  sectionContainer: {
    marginTop: 24,
  },
  textHeader: {
    borderBottomColor: '#000',
    color: '#000',
    borderBottomWidth: 1,
    paddingBottom: 5,
    fontSize: 20,
    fontWeight: '400',
  },
});
export default PaymentScreen;
