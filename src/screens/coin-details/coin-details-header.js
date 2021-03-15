import React from 'react';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import PercentageText from '../../components/percentage-text/percentage-text';
import PriceText from '../../components/price-text/price-text';
import Converter from '../../components/converter/converter';

import {selectedCoinSelector} from '../../redux/coins/coins.selectors';

import styles from './styles';

const CoinDetailsScreenHeader = () => {
  const selectedCoin = useSelector(selectedCoinSelector);

  const {symbol: shortName, market_data} = selectedCoin;
  const {
    current_price: {usd: current_price_usd},
    price_change_percentage_1h_in_currency: {
      usd: price_change_percentage_1h_in_currency_usd,
    },
  } = market_data;

  return (
    <View style={[styles.card, styles.header]}>
      <View style={styles.row}>
        <PriceText text={current_price_usd} styleText={{fontSize: 30}} />
        <PercentageText
          text={price_change_percentage_1h_in_currency_usd}
          styleText={{fontSize: 14}}
        />
      </View>
      <View style={styles.row}>
        <Converter
          converterRate={current_price_usd}
          currency={shortName.toUpperCase()}
        />
      </View>
    </View>
  );
};

export default CoinDetailsScreenHeader;
