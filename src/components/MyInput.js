import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Line from './Line';

const MyInput = ({textLabel, style, icon, iconPosition, ...propsInput}) => {
  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };
  return (
    <View style={style}>
      <Text style={styles.label}>{textLabel}</Text>
      <View
        style={[
          styles.containerInput,
          {alignItems: icon ? 'center' : 'baseline'},
          {flexDirection: getFlexDirection()},
        ]}>
        <View>{icon && icon}</View>

        <TextInput {...propsInput} style={styles.textInput} />
      </View>
      <Line style={{backgroundColor: '#888'}} />
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: {
    color: '#181725',
    fontSize: 18,
    marginTop: -6,
    flex: 1,
  },
  label: {
    marginLeft: 4,
    color: '#7C7C7C',
    fontSize: 16,
  },
  containerInput: {
    height: 42,
    paddingHorizontal: 5,
    marginTop: 5,
  },
});
export default MyInput;
