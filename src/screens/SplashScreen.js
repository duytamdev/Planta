import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {UserContext} from '../user/UserContext';

const SplashScreen = ({navigation}) => {
  const {isLogin} = useContext(UserContext);
  console.log(isLogin);
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace(isLogin ? 'BottomTabs' : 'Login');
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.sectionLogo}>
        <Image
          style={styles.logo}
          source={require('../assets/images/carrot.png')}
        />
        <View>
          <Text style={styles.titleLogo}>Planta</Text>
          <Text style={styles.subTitle}>mua cây trồng online</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#53B175',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginRight: 10,
  },
  titleLogo: {
    fontWeight: 'bold',
    fontSize: 48,
    marginBottom: -10,
    color: 'white',
  },
  subTitle: {
    color: '#fff',
  },
});
export default SplashScreen;
