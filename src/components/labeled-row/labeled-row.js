import React from 'react';
import {View} from 'react-native';

import DefaultText from '../default-text/default-text';
import PriceText from '../price-text/price-text';
import PercentageText from '../percentage-text/percentage-text';

const ValueTypes = {
  default: DefaultText,
  price: PriceText,
  percent: PercentageText,
};

const LabeledRow = ({style, styleText, styleValue, title, value, type}) => {
  const TextComponent = ValueTypes[type];

  return (
    <View style={[style]}>
      <DefaultText text={title} styleText={styleText} />
      <TextComponent text={value} styleText={styleValue} />
    </View>
  );
};

export default LabeledRow;
