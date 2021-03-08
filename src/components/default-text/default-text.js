import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const DefaultText = ({text, styleText, styleContainer}) => (
  <View style={styleContainer}>
    <Text style={[styles.text, styleText]}>{text}</Text>
  </View>
);

export default DefaultText;
