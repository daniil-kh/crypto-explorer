import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const PriceText = ({text, styleText, styleContainer}) => {
  return (
    <View style={styleContainer}>
      <Text style={[styles.text, styleText]}>{`$${
        Math.round((text + Number.EPSILON) * 100) / 100
      }`}</Text>
    </View>
  );
};

export default PriceText;
