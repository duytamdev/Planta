import React from 'react';
import {View} from 'react-native';

export default function Line({style}) {
  return (
    <View
      style={[
        {
          height: 1,
          backgroundColor: 'rgba(147,147,147,0.3)',
          alignSelf: 'stretch',
        },
        style,
      ]}
    />
  );
}
