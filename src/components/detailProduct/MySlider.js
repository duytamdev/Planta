import React, {memo} from 'react';

import {View, StyleSheet, Dimensions} from 'react-native';
import {ImageSlider} from 'react-native-image-slider-banner';
const MySlide = ({images1, images2}) => {
  return (
    <View style={styles.container}>
      <ImageSlider
        data={[
          {
            img: images1,
          },
          {
            img: images2,
          },
          {
            img: images1,
          },
        ]}
        autoPlay={false}
        closeIconColor="#fff"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: (Dimensions.get('window').height * 35) / 100, // height: 35%
  },
});
export default memo(MySlide);
