import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import CoinCardShort from '../../components/coin-card-short/coin-card-short';

import {
  GetCoinExchangeRateStart,
  LoadAllAvailableCoinsStart,
} from '../../redux/coins/coins.actions';
import {
  allAvailableCoinsSelector,
  isLoadingSelector,
} from '../../redux/coins/coins.selectors';

import styles from './styles';

const CoinsCurrency = ({route, navigation}) => {
  const dispatch = useDispatch();
  const allAvailableCoins = useSelector(allAvailableCoinsSelector);
  const isLoading = useSelector(isLoadingSelector);

  const renderItem = useCallback(
    ({item, index}) => (
      <CoinCardShort
        styleContainer={[
          styles.listItem,
          index % 2 === 0 ? styles.darkBackground : {},
        ]}
        coinData={item}
        onPress={() => {
          dispatch(GetCoinExchangeRateStart(item.id));
          navigation.navigate('Converter');
        }}
      />
    ),
    [dispatch, GetCoinExchangeRateStart, CoinCardShort, navigation],
  );

  const keyExtractor = useCallback((item) => item.id + item.symbol, []);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        style={styles.list}
        data={allAvailableCoins}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        refreshing={isLoading}
        onRefresh={() => dispatch(LoadAllAvailableCoinsStart())}
      />
    </View>
  );
};

export default CoinsCurrency;
