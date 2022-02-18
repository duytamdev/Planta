import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Text from '../assets/TextMy';
import {ColorsGlobal} from '../assets/ColorsGlobal';
const BottomSheet = ({onPressPicture, onPressCamera, onCancel}) => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.title}>Upload photo</Text>
        <Text>Choose your profile picture</Text>
      </View>
      <View style={styles.sectionButtons}>
        <TouchableOpacity onPress={onPressCamera} style={styles.button}>
          <Text style={styles.textButton}>Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressPicture} style={styles.button}>
          <Text style={styles.textButton}>Choose from library</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onCancel}
          style={[styles.button, {backgroundColor: '#ff3737'}]}>
          <Text style={styles.textButton}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textButton: {
    color: '#fff',
    fontFamily: 'Gilroy-ExtraBold',
  },
  button: {
    marginBottom: 8,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: ColorsGlobal.main,
  },
  sectionButtons: {
    width: '100%',
    marginTop: 16,
  },
  title: {
    color: '#000',
    fontSize: 24,
  },
  sectionHeader: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
export default BottomSheet;
