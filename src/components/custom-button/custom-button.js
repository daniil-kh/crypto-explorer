import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import styles from './styles';

const CustomButton = ({title, onPress, styleContainer, styleText}) => (
  <View style={[styles.mainContainer, styleContainer]}>
    <TouchableOpacity onPress={onPress} style={styles.innerTouchable}>
      <Text style={[styles.text, styleText]}>{title}</Text>
    </TouchableOpacity>
  </View>
);

export default CustomButton;
