import React from 'react';

import {Text, View, StyleSheet} from 'react-native';
import MyInput from '../components/MyInput';
import {ColorsGlobal} from '../assets/ColorsGlobal';
import MyButton from '../components/MyButton';

const UpDateInfo = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.sub}>
          Thông tin sẽ được lưu cho lần mua kế tiếp. Bấm vào thông tin chi tiết
          để chỉnh sửa.
        </Text>
        <View style={styles.section}>
          <MyInput
            styleLine={styles.styleLine}
            placeholder={'Nguyễn Duy Tâm'}
          />
          <MyInput
            styleLine={styles.styleLine}
            placeholder={'tamduynguyen0819@gmail.com'}
          />
          <MyInput
            styleLine={styles.styleLine}
            placeholder={'Quận 12, Hồ Chí Minh'}
          />
          <MyInput styleLine={styles.styleLine} placeholder={'0908456115'} />
        </View>
      </View>
      <MyButton
        styleContainer={styles.buttonContainer}
        styleButton={styles.button}
        styleText={styles.textButton}
        title={'LƯU THÔNG TIN'}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
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
  button: {
    backgroundColor: ColorsGlobal.gray,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 45,
    left: 45,
    right: 45,
  },
});
export default UpDateInfo;
