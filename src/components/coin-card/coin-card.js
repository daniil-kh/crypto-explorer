import React from 'react';
import {View, Text} from 'react-native';

import Card from '../card/card';
import Logo from '../logo/logo';
import PriceText from '../price-text/price-text';
import PercentageText from '../percentage-text/percentage-text';
import DefaultText from '../default-text/default-text';

import styles from './styles';

const CoinCard = ({coinData}) => {
  return (
    <Card
      style={{
        width: '100%',
        marginVertical: 5,
      }}>
      <Logo imageUrl={coinData.image} style={styles.contentContainer} />
      <DefaultText
        text={coinData.name}
        styleContainer={[styles.contentContainer]}
      />
      <PriceText
        price={coinData.current_price}
        styleContainer={styles.contentContainer}
      />
      <PercentageText
        percentage={coinData.price_change_percentage_1h_in_currency}
        styleContainer={styles.contentContainer}
      />
    </Card>
  );
};

export default CoinCard;
