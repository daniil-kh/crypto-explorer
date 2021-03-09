import React, {useState} from 'react';
import {View, TextInput} from 'react-native';

import styles from './styles';

const Converter = ({converterRate}) => {
  const [coinValue, setCoinValue] = useState('1');
  const [moneyValue, setMoneyValue] = useState(converterRate.toString());

  return (
    <View style={styles.mainContainer}>
      <View>
        <TextInput
          style={styles.textInput}
          value={coinValue}
          keyboardType={'numeric'}
          onChangeText={(value) => {
            const formatValue = value.replace(/,/g, '.');
            const newCoinValue = parseFloat(formatValue);
            const newMoneyValue = newCoinValue * parseFloat(converterRate);
            setCoinValue(formatValue);
            if (value.length > 0) setMoneyValue(newMoneyValue.toString());
          }}
        />
      </View>
      <View>
        <TextInput
          style={styles.textInput}
          value={moneyValue}
          keyboardType={'numeric'}
          onChangeText={(value) => {
            const formatValue = value.replace(/,/g, '.');
            const newMoneyValue = parseFloat(formatValue);
            const newCoinValue = newMoneyValue / parseFloat(converterRate);
            setMoneyValue(formatValue);
            if (value.length > 0) setCoinValue(newCoinValue.toString());
          }}
        />
      </View>
    </View>
  );
};

export default Converter;
