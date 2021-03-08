import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const PriceText = ({price, styleText, styleContainer}) => {
  return (
    <View style={styleContainer}>
      <Text style={[styles.text, styleText]}>{`$${price}`}</Text>
    </View>
  );
};

export default PriceText;
