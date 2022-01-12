import React from 'react';
import {Image, ImageBackground, StyleSheet} from 'react-native';

const MyBackground = () => {
  return (
    <ImageBackground
      source={require('../assets/images/mesh-gradient.png')}
      style={styles.sectionLogo}>
      <Image source={require('../assets/images/carrotColor.png')} />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  sectionLogo: {
    flex: 1,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MyBackground;
