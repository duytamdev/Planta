import React from 'react';

import {Text, View, StyleSheet, Image} from 'react-native';

const CompoItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionText}>
        <Text style={styles.textTitle}>Lemon Balm Grow Kit</Text>
        <Text style={styles.textSub}>
          Gồm: hạt giống Lemon Balm, gói đất hữu cơ, chậu Planta, marker đánh
          dấu...
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/grow-kit-main_540x.png')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  imageContainer: {flex: 1},
  textTitle: {color: '#000'},
  textSub: {color: '#7D7B7B'},
  sectionText: {
    flex: 2,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingStart: 24,
  },
  image: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  container: {
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
  },
});
export default CompoItem;
