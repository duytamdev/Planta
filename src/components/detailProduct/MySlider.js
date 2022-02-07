import React, {memo} from 'react';

import {View, StyleSheet} from 'react-native';
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
        onItemChanged={item => console.log('item', item)}
        closeIconColor="#fff"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: 270,
  },
});
export default memo(MySlide);
