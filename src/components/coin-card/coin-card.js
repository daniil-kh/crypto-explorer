import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import Card from '../card/card';
import Logo from '../logo/logo';
import PriceText from '../price-text/price-text';
import PercentageText from '../percentage-text/percentage-text';
import DefaultText from '../default-text/default-text';

import styles from './styles';

const CoinCard = ({coinData, onPress}) => {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={onPress} style={styles.innerTouchable}>
        <Card
          style={{
            width: '100%',
            marginVertical: 5,
            height: 60,
          }}>
          <Logo imageUrl={coinData.image} style={styles.contentContainer} />
          <DefaultText
            text={
              coinData.name.length > 10
                ? coinData.symbol.toUpperCase()
                : coinData.name
            }
            styleContainer={[styles.contentContainer]}
          />
          <PriceText
            text={coinData.current_price}
            styleContainer={styles.contentContainer}
          />
          <PercentageText
            text={coinData.price_change_percentage_1h_in_currency}
            styleContainer={styles.contentContainer}
          />
        </Card>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(CoinCard);
