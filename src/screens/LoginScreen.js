import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MyInput from '../components/MyInput';
import MyButton from '../components/MyButton';
import Icon from 'react-native-vector-icons/Entypo';
import MyBackground from '../components/MyBackground';
const LoginScreen = ({navigation}) => {
  const [isSecure, setIsSecure] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onPressSignUp = () => {
    navigation.navigate('Register');
  };
  const handleLogin = () => {
    navigation.replace('BottomTabs');
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MyBackground />
        <View style={styles.sectionForm}>
          <Text style={styles.title}>Login</Text>
          <Text style={{marginBottom: 40}}>Enter your email and password</Text>

          <MyInput
            value={email}
            onChangeText={value => setEmail(value)}
            style={styles.input}
            textLabel={'Email'}
            placeholder={'Please enter your email'}
          />
          <MyInput
            value={password}
            onChangeText={value => setPassword(value)}
            secureTextEntry={isSecure}
            iconPosition={'right'}
            icon={
              <Icon
                onPress={() => setIsSecure(!isSecure)}
                name={isSecure ? 'eye-with-line' : 'eye'}
                size={25}
                color={'#333'}
              />
            }
            style={styles.input}
            textLabel={'Password'}
            placeholder={'Please enter your password'}
          />

          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <TouchableOpacity>
              <Text style={{color: '#181725'}}>Forgot password ?</Text>
            </TouchableOpacity>
          </View>
          <MyButton
            onPress={handleLogin}
            styleContainer={{marginTop: 28, marginBottom: 12}}
            styleText={{color: '#fff', fontSize: 18}}
            title={'Login'}
          />
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text>Don't have an account ? </Text>
            <TouchableOpacity onPress={onPressSignUp}>
              <Text style={{color: '#53B175', fontWeight: '600'}}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FEFFFF'},
  sectionLogo: {
    flex: 1,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionForm: {
    paddingTop: 8,
    paddingHorizontal: 16,
    flex: 3,
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 26,
  },
  input: {
    marginVertical: 8,
  },
});
export default LoginScreen;