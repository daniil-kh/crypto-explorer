import React from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import DefaultText from '../../components/default-text/default-text';
import PriceText from '../../components/price-text/price-text';
import COLORS from '../../constants/colors';

import {
  selectedCoinTickersSelector,
  selectedCoinSymbolSelector,
} from '../../redux/coins/coins.selectors';

import styles from './styles';

const CoinDetailsExchangeScreen = () => {
  const tickers = useSelector(selectedCoinTickersSelector);
  const symbol = useSelector(selectedCoinSymbolSelector);

  const renderItem = ({item}) => {
    const color =
      item.trust_score === 'green'
        ? COLORS.primaryGreen
        : item.trust_score === 'red'
        ? COLORS.primaryGreen
        : item.trust_score === 'yellow'
        ? COLORS.primaryYellow
        : COLORS.primaryBlack;

    return (
      <View style={styles.tickersRowStyle}>
        <DefaultText
          styleContainer={[styles.cell, {width: '20%'}]}
          text={item.market?.name}
          styleText={[styles.tickersText]}
        />
        <DefaultText
          styleContainer={[styles.cell, {width: '10%'}]}
          text={`${item.base.length > 4 ? symbol.toUpperCase() : item.base}\n${
            item.target
          }`}
          styleText={[styles.tickersText]}
        />
        <PriceText
          styleContainer={[styles.cell, {width: '29%'}]}
          text={item.last}
          styleText={[styles.tickersText]}
        />
        <PriceText
          styleContainer={[styles.cell, {width: '29%'}]}
          text={item.converted_volume?.usd}
          styleText={[styles.tickersText]}
        />
        <View style={[styles.cell, {width: '12%'}]}>
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: color,
              borderRadius: 10,
              overflow: 'hidden',
            }}
          />
        </View>
      </View>
    );
  };

  const keyExtractor = (item) => item.market?.identifier + item.volume;

  const headerComponent = () => (
    <View style={styles.tickersHeaderStyle}>
      <DefaultText
        styleContainer={[styles.cell, {width: '20%'}]}
        text={'EXCH'}
        styleText={[styles.tickersText]}
      />
      <DefaultText
        styleContainer={[styles.cell, {width: '10%'}]}
        text={'PAIR'}
        styleText={[styles.tickersText]}
      />
      <DefaultText
        styleContainer={[styles.cell, {width: '29%'}]}
        text={'PRICE'}
        styleText={[styles.tickersText]}
      />
      <DefaultText
        styleContainer={[styles.cell, {width: '29%'}]}
        text={'24H VOLUME'}
        styleText={[styles.tickersText]}
      />
      <DefaultText
        styleContainer={[styles.cell, {width: '12%'}]}
        text={'TRUST'}
        styleText={[styles.tickersText]}
      />
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={tickers}
        style={{width: '95%'}}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        removeClippedSubviews={true}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={headerComponent}
        stickyHeaderIndices={[0]}
        getItemLayout={(data, index) => ({
          length: 60,
          offset: 60 * index,
          index,
        })}
      />
    </View>
  );
};

export default CoinDetailsExchangeScreen;
