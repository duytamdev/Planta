import React from 'react';

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Line from './Line';
const SearchBar = ({style, onPressSearch, ...props}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.inputContainer}>
        <TextInput {...props} style={styles.textInput} />
        <Line />
      </View>
      <TouchableOpacity
        onPress={onPressSearch}
        style={styles.iconSearchContainer}>
        <FeatherIcon name={'search'} size={24} color={'#000'} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignContent: 'center',
    paddingHorizontal: 30,
  },
  inputContainer: {
    flexGrow: 1,
  },
  iconSearchContainer: {
    justifyContent: 'center',
  },
  textInput: {
    marginBottom: -8,
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
});
export default SearchBar;
