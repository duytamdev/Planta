import React from 'react';

import {Text, View, StyleSheet} from 'react-native';
import MyInput from '../components/common/MyInput';
import {ColorsGlobal} from '../assets/ColorsGlobal';
import MyButton from '../components/common/MyButton';

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
            style={styles.containerInput}
            styleInput={styles.stylesInput}
            styleLine={styles.styleLine}
            placeholder={'Nguyễn Duy Tâm'}
          />
          <MyInput
            style={styles.containerInput}
            styleInput={styles.stylesInput}
            styleLine={styles.styleLine}
            placeholder={'tamduynguyen0819@gmail.com'}
          />
          <MyInput
            style={styles.containerInput}
            styleInput={styles.stylesInput}
            styleLine={styles.styleLine}
            placeholder={'Quận 12, Hồ Chí Minh'}
          />
          <MyInput
            style={styles.containerInput}
            styleInput={styles.stylesInput}
            styleLine={styles.styleLine}
            placeholder={'0908456115'}
          />
        </View>
      </View>
      <MyButton
        styleContainer={styles.buttonContainer}
        styleButton={styles.buttonDisabled}
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
