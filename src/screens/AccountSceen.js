import React, {useContext, useEffect, useState} from 'react';

import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {ColorsGlobal} from '../assets/ColorsGlobal';
import Line from '../components/common/Line';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Text from '../assets/TextMy';
const AccountScreen = ({navigation}) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      await AsyncStorage.getItem('dataUser', (err, value) => {
        if (err) {
          console.log(err);
        } else {
          setData(JSON.parse(value));
        }
      });
    };
    fetchData();
  }, []);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // do something
      const fetchData = async () => {
        await AsyncStorage.getItem('dataUser', (err, value) => {
          if (err) {
            console.log(err);
          } else {
            setData(JSON.parse(value));
          }
        });
      };
      fetchData();
    });

    return unsubscribe;
  },[navigation])
  const handleUpdateInfo = () => {
    navigation.navigate('UpdateInfo');
  };
  const handleLogout = async () => {
    navigation.replace('Login');
    try {
      await AsyncStorage.setItem('isLogin', JSON.stringify(false));
    } catch (e) {
      console.log(e);
    }
  };
  const logout = () => {
    Alert.alert('Xác Nhận Thoát', 'Bạn thật sự muốn đăng xuất', [
      {
        text: 'Huỷ',
        onPress: null,
        style: 'cancel',
      },
      {text: 'Đăng Xuất', onPress: handleLogout},
    ]);
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data && (
          <TouchableOpacity style={styles.sectionProfileContainer}>
            <Image
              style={styles.image}
              source={
                data.avatar
                  ? {uri: data.avatar}
                  : require('../assets/images/avt.png')
              }
            />
            <View styles={styles.sectionProfile}>
              <Text style={styles.text}>
                {data.name ? data.name : 'Please update your name'}
              </Text>
              <Text style={styles.textEmail}>{data && data.email}</Text>
            </View>
          </TouchableOpacity>
        )}

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
            <TouchableOpacity
              onPress={() => navigation.navigate('CartHistory')}
              style={styles.section}>
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
            <TouchableOpacity style={styles.section} onPress={logout}>
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
