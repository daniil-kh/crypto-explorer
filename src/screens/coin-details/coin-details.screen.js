import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

import Card from '../../components/card/card';
import Logo from '../../components/logo/logo';
import DefaultText from '../../components/default-text/default-text';
import PercentageText from '../../components/percentage-text/percentage-text';
import PriceText from '../../components/price-text/price-text';
import CoinLoader from '../../components/coins-loader/coins-loader';

import {
  selectedCoinSelector,
  isLoadingSelector,
  coinDataSelector,
} from '../../redux/coins/coins.selectors';

import styles from './styles';
import CoinsLoader from '../../components/coins-loader/coins-loader';

const CoinDetailsScreen = ({route, navigation}) => {
  const {imageUrl, fullName, shortName, id} = route.params;
  const selectedCoin = useSelector(selectedCoinSelector);
  const isLoading = useSelector(isLoadingSelector);
  const coinData = useSelector(coinDataSelector(id))[0];

  console.log(selectedCoin);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={styles.headerTitle}>
          <Logo imageUrl={imageUrl} style={styles.headerTitleLogo} />
          <DefaultText
            text={fullName[0].toUpperCase() + fullName.slice(1)}
            styleContainer={styles.headerTitleContent}
            styleText={styles.headerTitleText}
          />
          <DefaultText
            text={`(${shortName.toUpperCase()})`}
            styleContainer={styles.headerTitleContent}
            styleText={styles.headerTitleText}
          />
        </View>
      ),
    });
  }, []);

  return (
    <CoinsLoader>
      <View style={styles.mainContainer}>
        <View style={styles.card}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.row}>
              <PriceText
                text={coinData.current_price}
                styleText={{fontSize: 30}}
              />
              <PercentageText
                text={coinData.price_change_percentage_1h_in_currency}
                styleText={{fontSize: 14}}
              />
            </View>
            <View style={styles.row}>
              <DefaultText text={'Here will be converter'} />
            </View>
            <View style={styles.row}>
              <DefaultText text={'Here will be price chart'} />
            </View>
            <View style={styles.row}>
              <DefaultText text={'Here will be options for price chart'} />
            </View>
            <View style={styles.gridRow}>
              <View
                style={[
                  styles.cell,
                  {borderBottomWidth: 0, borderRightWidth: 0},
                ]}>
                <DefaultText text={'24H'} />
              </View>
              <View
                style={[
                  styles.cell,
                  {borderBottomWidth: 0, borderRightWidth: 0},
                ]}>
                <DefaultText text={'7D'} />
              </View>
              <View
                style={[
                  styles.cell,
                  {borderBottomWidth: 0, borderRightWidth: 0},
                ]}>
                <DefaultText text={'14D'} />
              </View>
              <View
                style={[
                  styles.cell,
                  {borderBottomWidth: 0, borderRightWidth: 0},
                ]}>
                <DefaultText text={'30D'} />
              </View>
              <View
                style={[
                  styles.cell,
                  {borderBottomWidth: 0, borderRightWidth: 0},
                ]}>
                <DefaultText text={'60D'} />
              </View>
              <View style={[styles.cell, {borderBottomWidth: 0}]}>
                <DefaultText text={'1Y'} />
              </View>
            </View>
            <View style={styles.gridRow}>
              <View style={[styles.cell, {borderRightWidth: 0}]}>
                <PercentageText
                  text={selectedCoin.market_data.price_change_percentage_24h}
                  styleText={{fontSize: 15}}
                />
              </View>
              <View style={[styles.cell, {borderRightWidth: 0}]}>
                <PercentageText
                  text={selectedCoin.market_data.price_change_percentage_7d}
                  styleText={{fontSize: 15}}
                />
              </View>
              <View style={[styles.cell, {borderRightWidth: 0}]}>
                <PercentageText
                  text={selectedCoin.market_data.price_change_percentage_14d}
                  styleText={{fontSize: 15}}
                />
              </View>
              <View style={[styles.cell, {borderRightWidth: 0}]}>
                <PercentageText
                  text={selectedCoin.market_data.price_change_percentage_30d}
                  styleText={{fontSize: 15}}
                />
              </View>
              <View style={[styles.cell, {borderRightWidth: 0}]}>
                <PercentageText
                  text={selectedCoin.market_data.price_change_percentage_60d}
                  styleText={{fontSize: 15}}
                />
              </View>
              <View style={[styles.cell]}>
                <PercentageText
                  text={selectedCoin.market_data.price_change_percentage_1y}
                  styleText={{fontSize: 15}}
                />
              </View>
            </View>
            <View style={styles.textRow}>
              <DefaultText text={'Market cap rank'} />
              <DefaultText text={selectedCoin.market_data.market_cap_rank} />
            </View>
            <View style={styles.textRow}>
              <DefaultText text={'Market cap'} />
              <PriceText text={selectedCoin.market_data.market_cap.usd} />
            </View>
            <View style={styles.textRow}>
              <DefaultText text={'Trading volume'} />
              <PriceText text={selectedCoin.market_data.total_volume.usd} />
            </View>
            <View style={styles.textRow}>
              <DefaultText text={'24H High'} />
              <PriceText text={selectedCoin.market_data.high_24h.usd} />
            </View>
            <View style={styles.textRow}>
              <DefaultText text={'24H Low'} />
              <PriceText text={selectedCoin.market_data.low_24h.usd} />
            </View>
            <View style={styles.textRow}>
              <DefaultText text={'Available supply'} />
              <PriceText text={selectedCoin.market_data.circulating_supply} />
            </View>
            <View style={styles.textRow}>
              <DefaultText text={'Total supply'} />
              <PriceText text={selectedCoin.market_data.total_supply} />
            </View>
            <View style={styles.textRow}>
              <DefaultText text={'Fully diluted valuation'} />
              <PriceText
                text={selectedCoin.market_data.fully_diluted_valuation.usd}
              />
            </View>
            <View style={styles.textRow}>
              <DefaultText text={'All-Time High'} />
              <PriceText text={selectedCoin.market_data.ath.usd} />
            </View>
            <View style={styles.textRow}>
              <DefaultText text={'Since All-Time High'} />
              <PercentageText
                text={selectedCoin.market_data.ath_change_percentage.usd}
              />
            </View>
            <View style={styles.textRow}>
              <DefaultText text={'All-Time High Date'} />
              <DefaultText text={selectedCoin.market_data.ath_date.usd} />
            </View>
            <View style={styles.textRow}>
              <DefaultText text={'All-Time Low'} />
              <PriceText text={selectedCoin.market_data.atl.usd} />
            </View>
            <View style={styles.textRow}>
              <DefaultText text={'Since All-Time Low'} />
              <PercentageText
                text={selectedCoin.market_data.atl_change_percentage.usd}
              />
            </View>
            <View style={styles.textRow}>
              <DefaultText text={'All-Time Low Date'} />
              <DefaultText text={selectedCoin.market_data.atl_date.usd} />
            </View>
          </ScrollView>
        </View>
      </View>
    </CoinsLoader>
  );
};

export default CoinDetailsScreen;

/*

*/
