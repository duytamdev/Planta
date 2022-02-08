import React, {useState} from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Dimensions,
  Alert,
} from 'react-native';
import MyInput from '../components/common/MyInput';
import {ColorsGlobal} from '../assets/ColorsGlobal';
import Icon, {Icons} from '../assets/Icons';
import MyButton from '../components/common/MyButton';
const PaymentScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleOrder = () => {
    setModalVisible(!modalVisible);
    navigation.navigate('OrderSuccess');
  };
  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.textHeader}>Thông tin khách hàng</Text>
        <MyInput
          styleInput={styles.textInputBlur}
          value={'Nguyễn Duy Tâm'}
          placeholder="Họ và tên"
        />
        <MyInput
          styleInput={styles.textInputBlur}
          value={'tamduynguyen0819@gmail.com'}
          placeholder="Email"
        />
        <MyInput placeholder="Địa chỉ" />
        <MyInput placeholder="Số điện thoại" />
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.textHeader}>Phương thức vận chuyển</Text>
        <TouchableOpacity style={[styles.formMoveContainer, styles.lineBottom]}>
          <View>
            <Text style={styles.textPrimary}>Giao hàng nhanh - 15.000đ</Text>
            <Text style={styles.text}>Dự kiến giao hàng 4-8/09</Text>
          </View>
          <Icon
            type={Icons.Feather}
            name={'check'}
            size={24}
            color={ColorsGlobal.main}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.textHeader}>Hình thức thanh toán</Text>
        <View style={[styles.formMoveContainer, styles.lineBottom]}>
          <Text style={styles.textPrimary}>Thanh toán khi nhận hàng - COD</Text>
          <Icon
            type={Icons.Feather}
            name={'check'}
            size={24}
            color={ColorsGlobal.main}
          />
        </View>
        <View style={[styles.formMoveContainer, styles.lineBottom]}>
          <Text style={styles.text}>Thẻ VISA/MASTERCARD</Text>
        </View>
      </View>
      <View style={styles.sectionBottom}>
        <View style={styles.viewRow}>
          <Text style={styles.text}>Tạm tính</Text>
          <Text>500.00d</Text>
        </View>
        <View style={styles.viewRow}>
          <Text style={styles.text}>Phí vận chuyển</Text>
          <Text style={styles.text}>15.00d</Text>
        </View>
        <View style={styles.viewRow}>
          <Text style={[styles.text2]}>Tổng cộng</Text>
          <Text style={[styles.textPrimary, styles.text2]}>515.00d</Text>
        </View>
        <MyButton
          onPress={() => setModalVisible(true)}
          styleContainer={styles.buttonContainer}
          styleText={styles.textButton}
          styleButton={styles.button}
          title={'Tiếp tục'}
        />
      </View>
      <Modal animationType="slide" visible={modalVisible} transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalContent}>
            <Text style={[styles.text, styles.textInputFocus]}>
              Xác nhận thanh toán?
            </Text>
            <MyButton
              onPress={handleOrder}
              title={'Đồng ý'}
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
                Huỷ bỏ
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
