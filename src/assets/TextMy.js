import {Text} from 'react-native';
import React from 'react';

export default props => (
  <Text {...props} style={[{fontFamily: 'Gilroy-Medium'}, props.style]}>
    {props.children}
  </Text>
);
