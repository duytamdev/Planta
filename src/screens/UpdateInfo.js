import React, {useContext, useEffect, useState} from 'react';

import {View, StyleSheet, ToastAndroid} from 'react-native';
import MyInput from '../components/common/MyInput';
import {ColorsGlobal} from '../assets/ColorsGlobal';
import MyButton from '../components/common/MyButton';
import Text from '../assets/TextMy';
import {UserContext} from '../user/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProgressDialog from 'react-native-progress-dialog';
const avt = 'https://2.pik.vn/20228e132485-e812-4825-8ae5-34506c84acbe.jpg';
const dob = '2002-08-19';
const UpDateInfo = ({navigation}) => {
  const {onUpdateInfo} = useContext(UserContext);
  const [dataUser, setDataUser] = useState(null);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      await AsyncStorage.getItem('dataUser', (err, value) => {
        if (err) {
          console.log(err);
        } else {
          const data = JSON.parse(value);
          setDataUser(JSON.parse(value));
          setAddress(data.address);
          setPhone(data.phone);
          setName(data.name);
        }
      });
    };
    fetchData();
  }, []);
  const handleUpdateInfo = async () => {
    const res = await onUpdateInfo(name, address, phone, avt, dob);
    ToastAndroid.show(
      res === true ? 'Cập nhật thành công!' : 'Cập nhật không thành công',
      2000,
    );
    navigation.goBack();
  };
  if (dataUser == null) {
    return <ProgressDialog visible={true} />;
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.sub}>
          Thông tin sẽ được lưu cho lần mua kế tiếp. Bấm vào thông tin chi tiết
          để chỉnh sửa.
        </Text>
        <View style={styles.section}>
          <MyInput
            onChangeText={value => setName(value)}
            value={name}
            style={styles.containerInput}
            styleInput={styles.stylesInput}
            styleLine={styles.styleLine}
            placeholder={'Your full name'}
          />
          <MyInput
            onChangeText={() =>
              ToastAndroid.show('Bạn không thể thay đổi email!', 2000)
            }
            value={dataUser && dataUser.email}
            style={styles.containerInput}
            styleInput={styles.stylesInput}
            styleLine={styles.styleLine}
            placeholder={'Your email'}
          />
          <MyInput
            onChangeText={value => setAddress(value)}
            value={address}
            style={styles.containerInput}
            styleInput={styles.stylesInput}
            styleLine={styles.styleLine}
            placeholder={'Your address'}
          />
          <MyInput
            maxLength={10}
            keyboardType="numeric"
            onChangeText={value => setPhone(value)}
            value={phone}
            style={styles.containerInput}
            styleInput={styles.stylesInput}
            styleLine={styles.styleLine}
            placeholder={'Your phone number'}
          />
        </View>
      </View>
      <MyButton
        onPress={handleUpdateInfo}
        disabled={!(name.length > 0 && address.length > 0 && phone.length > 0)}
        styleContainer={styles.buttonContainer}
        styleButton={
          name.length > 0 && address.length > 0 && phone.length > 0
            ? styles.buttonNomad
            : styles.buttonDisabled
        }
        styleText={styles.textButton}
        title={'LƯU THÔNG TIN'}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  containerInput: {
    marginTop: 8,
  },
  stylesInput: {borderBottomWidth: 0.5},
  container: {
    flex: 1,
    position: 'relative',
    paddingTop: 15,
    backgroundColor: '#fff',
    paddingHorizontal: 48,
  },
  sub: {
    color: '#000',
    fontSize: 16,
  },
  section: {
    marginTop: 52,
  },
  styleLine: {
    backgroundColor: ColorsGlobal.greyDark,
  },
  textButton: {
    color: '#fff',
  },
  buttonDisabled: {
    backgroundColor: ColorsGlobal.gray,
    borderRadius: 8,
  },
  buttonNomad: {
    backgroundColor: ColorsGlobal.main,
    borderRadius: 8,
  },
  buttonContainer: {
    width: '100%',
    marginStart: 45,
    position: 'absolute',
    bottom: 20,
  },
});
export default UpDateInfo;
