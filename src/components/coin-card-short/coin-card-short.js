import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import DefaultText from '../default-text/default-text';

import styles from './styles';

const CoinCardShort = ({onPress, styleContainer, coinData}) => {
  return (
    <View style={[styles.mainContainer, styleContainer]}>
      <TouchableOpacity onPress={onPress} style={styles.innerTouchable}>
        <DefaultText
          text={coinData.name}
          styleContainer={styles.headerTitleContent}
          styleText={styles.headerTitleText}
        />
        <DefaultText
          text={`(${coinData.symbol.toUpperCase()})`}
          styleContainer={styles.headerTitleContent}
          styleText={styles.headerTitleText}
        />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(CoinCardShort);
