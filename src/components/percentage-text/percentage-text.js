import React from 'react';
import {View, Text} from 'react-native';

import COLORS from '../../constants/colors';
import styles from './styles';

const PercentageText = ({percentage, styleText, styleContainer}) => {
  const textColor = percentage >= 0 ? COLORS.primaryGreen : COLORS.primaryRed;

  return (
    <View style={styleContainer}>
      <Text style={[styles.text, styleText, {color: textColor}]}>{`${(percentage
        ? percentage
        : 0
      ).toPrecision(3)}%`}</Text>
    </View>
  );
};

export default PercentageText;
