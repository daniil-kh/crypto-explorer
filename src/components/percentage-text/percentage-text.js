import React from 'react';
import {View, Text} from 'react-native';

import COLORS from '../../constants/colors';
import styles from './styles';

const PercentageText = ({text, styleText, styleContainer}) => {
  const textColor = text >= 0 ? COLORS.primaryGreen : COLORS.primaryRed;

  return (
    <View style={styleContainer}>
      <Text style={[styles.text, styleText, {color: textColor}]}>{`${
        Math.round((text + Number.EPSILON) * 10) / 10
      }%`}</Text>
    </View>
  );
};

export default PercentageText;
