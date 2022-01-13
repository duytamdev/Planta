import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import MyInput from '../components/MyInput';
import MyButton from '../components/MyButton';
import Icon from 'react-native-vector-icons/Entypo';
import MyBackground from '../components/MyBackground';

const RegisterScreen = () => {
  const [isSecure, setIsSecure] = useState(true);
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
            style={styles.input}
            textLabel={'Email'}
            placeholder={'Please enter your email'}
          />
          <MyInput
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
