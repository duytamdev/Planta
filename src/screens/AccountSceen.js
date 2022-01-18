import React from 'react';

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ColorsGlobal} from '../assets/ColorsGlobal';
import Line from '../components/Line';

const AccountScreen = ({navigation}) => {
  const handleUpdateInfo = () => {
    navigation.navigate('UpdateInfo');
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.sectionProfileContainer}>
          <Image
            style={styles.image}
            source={require('../assets/images/avt.png')}
          />
          <View styles={styles.sectionProfile}>
            <Text style={styles.text}>NGUYỄN DUY TÂM</Text>
            <Text style={styles.textEmail}>tamduynguyen0819@gmail.com</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.sectionContainer}>
          <View>
            <Text style={styles.textSectionHeader}>Chung</Text>
            <Line style={styles.line} />
            <TouchableOpacity onPress={handleUpdateInfo} style={styles.section}>
              <Text style={styles.text}>Chỉnh sửa thông tin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.section}>
              <Text style={styles.text}>Cẩm nang trồng cây</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.section}>
              <Text style={styles.text}>Lịch sử giao dịch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.section}>
              <Text style={styles.text}>Q & A</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sectionGeneralContainer}>
            <Text style={styles.textSectionHeader}>Bảo mật và điều khoản</Text>
            <Line style={styles.line} />
            <TouchableOpacity style={styles.section}>
              <Text style={styles.text}>Điều khoản và điều kiện</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.section}>
              <Text style={styles.text}>Chính sách quyền riêng tư</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.section}>
              <Text style={[styles.text, styles.textLogout]}>Đăng Xuất</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionProfileContainer: {
    marginTop: 15,
    flexDirection: 'row',
    padding: 15,
    paddingStart: 45,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 48,
    marginEnd: 26,
  },
  sectionProfile: {},
  text: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
  textEmail: {
    color: ColorsGlobal.greyDark,
    fontSize: 14,
  },
  sectionGeneralContainer: {marginTop: 30},
  textSectionHeader: {
    color: ColorsGlobal.greyDark,
    fontSize: 16,
    marginBottom: 5,
  },
  line: {
    backgroundColor: ColorsGlobal.greyDark,
  },
  sectionContainer: {
    marginTop: 15,
    paddingHorizontal: 48,
  },
  section: {
    marginTop: 17,
  },
  textLogout: {
    color: '#FF0000',
  },
});
export default AccountScreen;
