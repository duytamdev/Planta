import React, {useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  ToastAndroid,
} from 'react-native';
import MyInput from '../components/common/MyInput';
import MyButton from '../components/common/MyButton';
import Icon from 'react-native-vector-icons/Entypo';
import MyBackground from '../components/userScreen/MyBackground';
import {UserContext} from '../user/UserContext';
import Text from '../assets/TextMy';
const RegisterScreen = ({navigation}) => {
  const [isSecure, setIsSecure] = useState(true);
  const [email, setEmail] = useState('duytam@gmail.com');
  const [password, setPassword] = useState('123456');
  const [passwordConfirm, setPasswordConfirm] = useState('123456');
  const {onRegister} = useContext(UserContext);
  const handleRegister = async () => {
    if (passwordConfirm.trim() === password.trim()) {
      const res = await onRegister(email, password);
      if (res === false) {
        ToastAndroid.show('Đăng kí không thành công!', 2000);
      } else {
        ToastAndroid.show('Đăng kí  thành công!', 2000);
        navigation.goBack();
      }
    } else {
      ToastAndroid.show('Mật khẩu không trùng khớp', 2000);
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flexGrow: 1}}>
        <MyBackground />
        <View style={styles.sectionForm}>
          <Text style={styles.title}>Register</Text>
          <Text style={{marginBottom: 32}}>
            Enter your credentials to continue
          </Text>
          <MyInput
            onChangeText={value => setEmail(value)}
            value={email}
            style={styles.input}
            textLabel={'Email'}
            placeholder={'Please enter your email'}
          />
          <MyInput
            onChangeText={value => setPassword(value)}
            value={password}
            iconPosition={'right'}
            icon={
              <Icon
                onPress={() => setIsSecure(!isSecure)}
                name={isSecure ? 'eye-with-line' : 'eye'}
                size={25}
                color={'#333'}
              />
            }
            secureTextEntry={isSecure}
            style={styles.input}
            textLabel={'Password'}
            placeholder={'Please enter your password'}
          />
          <MyInput
            onChangeText={value => setPasswordConfirm(value)}
            value={passwordConfirm}
            iconPosition={'right'}
            icon={
              <Icon
                onPress={() => setIsSecure(!isSecure)}
                name={isSecure ? 'eye-with-line' : 'eye'}
                size={25}
                color={'#333'}
              />
            }
            secureTextEntry={isSecure}
            style={styles.input}
            textLabel={'Confirm password'}
            placeholder={'Please enter confirm password'}
          />
          <Text style={{marginTop: 20}}>
            By continuing you agree to our{' '}
            <Text style={{color: '#53B175'}}>Terms of Service</Text> {'\n'}and{' '}
            <Text style={{color: '#53B175'}}>Privacy Policy</Text>
          </Text>
          <MyButton
            onPress={handleRegister}
            styleContainer={{marginTop: 30, marginBottom: 12}}
            styleText={{color: '#fff', fontSize: 18}}
            title={'Register'}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  sectionLogo: {
    flex: 1,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionForm: {
    flex: 3,
    marginTop: 8,
    paddingHorizontal: 16,
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 26,
  },
  input: {
    marginTop: 12,
  },
});
export default RegisterScreen;
