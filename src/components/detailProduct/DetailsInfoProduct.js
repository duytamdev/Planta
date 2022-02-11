import React, {memo} from 'react';

import { View, StyleSheet} from 'react-native';
import {ColorsGlobal} from '../../assets/ColorsGlobal';
import Text from '../../assets/TextMy';

const DetailsInfoProduct = ({product}) => {
  return (
    <View style={styles.sectionMain}>
      <Text numberOfLines={2} style={styles.nameProduct}>
        {product.name}
      </Text>
      <Text style={styles.priceProduct}>{`${product.price} VNĐ`}</Text>
      <View style={styles.sectionInfo}>
        <Text style={styles.sectionHeader}>Chi tiết sản phẩm</Text>
        <View style={styles.viewInfo}>
          <Text style={styles.text}>Kích cỡ</Text>
          <Text style={styles.text}>{product.size}</Text>
        </View>
        <View style={styles.viewInfo}>
          <Text style={styles.text}>Xuất Xứ</Text>
          <Text style={styles.text}>{product.madein}</Text>
        </View>
        <View style={styles.viewInfo}>
          <Text style={styles.text}>Tình Trạng</Text>
          <Text style={styles.text}>{`Còn ${product.quantity} sản phẩm`}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
  viewInfo: {
    borderBottomColor: '#3A3A3A',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
    marginTop: 15,
  },
  sectionHeader: {
    color: '#3A3A3A',
    fontSize: 20,
    paddingBottom: 5,
    borderBottomColor: '#3A3A3A',
    borderBottomWidth: 1,
  },
  sectionInfo: {
    marginTop: 17,
  },
  nameProduct: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 36,
  },
  priceProduct: {
    color: ColorsGlobal.main,
    fontWeight: '500',
    fontSize: 25,
  },
  sectionMain: {
    paddingHorizontal: 25,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default memo(DetailsInfoProduct);
