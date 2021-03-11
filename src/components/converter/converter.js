import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import COLORS from '../../constants/colors';

import IconButton from '../icon-button/icon-button';
import CustomButton from '../custom-button/custom-button';

import styles from './styles';

const Converter = ({converterRate, currency}) => {
  const [coinValue, setCoinValue] = useState('1');
  const [moneyValue, setMoneyValue] = useState(converterRate.toString());

  return (
    <View style={styles.mainContainer}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          value={coinValue}
          textAlign={'left'}
          keyboardType={'numeric'}
          onChangeText={(value) => {
            const formatValue = value
              .replace(/,/g, '.')
              .replace(/[.,][.,]+/g, '.');
            const newCoinValue = parseFloat(formatValue);
            const newMoneyValue =
              Math.round(
                (newCoinValue * parseFloat(converterRate) + Number.EPSILON) *
                  100,
              ) / 100;
            setCoinValue(formatValue);
            if (value.length > 0) setMoneyValue(newMoneyValue.toString());
          }}
        />
        <CustomButton
          styleContainer={styles.textInputButton}
          title={currency}
        />
      </View>
      <IconButton
        style={styles.iconButton}
        size={30}
        color={COLORS.primaryAqua}
        name="swap-horizontal"
      />
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          value={moneyValue}
          textAlign={'left'}
          keyboardType={'numeric'}
          onChangeText={(value) => {
            const formatValue = value
              .replace(/,/g, '.')
              .replace(/[.,][.,]+/g, '.');
            const newMoneyValue = parseFloat(formatValue);
            const newCoinValue =
              Math.round(
                (newMoneyValue / parseFloat(converterRate) + Number.EPSILON) *
                  100,
              ) / 100;
            setMoneyValue(formatValue);
            if (value.length > 0) setCoinValue(newCoinValue.toString());
          }}
        />
        <CustomButton styleContainer={styles.textInputButton} title="USD" />
      </View>
    </View>
  );
};

export default Converter;
