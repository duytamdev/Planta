import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

const MyButton = ({
  title,
  styleContainer,
  styleText,
  styleButton,
  ...propsButton
}) => {
  return (
    <View style={styleContainer}>
      <TouchableOpacity style={[styles.button, styleButton]} {...propsButton}>
        <Text style={styleText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#53B175',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 19,
    width: '100%',
  },
});
export default MyButton;
