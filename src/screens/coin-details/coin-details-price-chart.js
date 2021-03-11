import React from 'react';
import {View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

import DefaultText from '../../components/default-text/default-text';
import PercentageText from '../../components/percentage-text/percentage-text';
import Grid from '../../components/grid/grid';
import LabeledRow from '../../components/labeled-row/labeled-row';

import {selectedCoinSelector} from '../../redux/coins/coins.selectors';

import styles from './styles';

const CoinDetailsPriceChartScreen = () => {
  const selectedCoin = useSelector(selectedCoinSelector);

  const {market_data} = selectedCoin;
  const {
    price_change_percentage_24h,
    price_change_percentage_7d,
    price_change_percentage_14d,
    price_change_percentage_30d,
    price_change_percentage_60d,
    price_change_percentage_1y,
    market_cap_rank,
    market_cap: {usd: market_cap_usd},
    total_volume: {usd: total_volume_usd},
    high_24h: {usd: high_24h_usd},
    low_24h: {usd: low_24h_usd},
    circulating_supply,
    total_supply,
    fully_diluted_valuation: {usd: fully_diluted_valuation_usd},
    ath: {usd: ath_usd},
    ath_change_percentage: {usd: ath_change_percentage_usd},
    ath_date: {usd: ath_date_usd},
    atl: {usd: atl_usd},
    atl_change_percentage: {usd: atl_change_percentage_usd},
    atl_date: {usd: atl_date_usd},
  } = market_data;

  const PriceChangeData = {
    priceChange: [
      price_change_percentage_24h,
      price_change_percentage_7d,
      price_change_percentage_14d,
      price_change_percentage_30d,
      price_change_percentage_60d,
      price_change_percentage_1y,
    ],
    headerData: ['24H', '7D', '14D', '30D', '60D', '1Y'],
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.card}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.row}>
            <DefaultText text={'Here will be price chart'} />
          </View>
          <View style={styles.row}>
            <DefaultText text={'Here will be options for price chart'} />
          </View>
          <Grid
            style={{flex: 1, width: '100%'}}
            headerData={PriceChangeData.headerData}
            data={PriceChangeData.priceChange}
            numOfColumns={6}
            cellContainerStyle={styles.cell}
            renderItem={(item) => (
              <PercentageText text={item} styleText={styles.percentageText} />
            )}
            renderHeaderItem={(item) => (
              <DefaultText
                styleContainer={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                text={item}
              />
            )}
            keyExtractor={(item) => item}
          />
          <LabeledRow
            style={styles.textRow}
            title={'Market cap rank'}
            value={market_cap_rank}
            type="default"
            styleText={styles.labelText}
          />
          <LabeledRow
            style={styles.textRow}
            title={'Market cap'}
            value={market_cap_usd}
            type="price"
            styleText={styles.labelText}
          />
          <LabeledRow
            style={styles.textRow}
            title={'Trading volume'}
            value={total_volume_usd}
            type="price"
            styleText={styles.labelText}
          />
          <LabeledRow
            style={styles.textRow}
            title={'24H High'}
            value={high_24h_usd}
            type="price"
            styleText={styles.labelText}
          />
          <LabeledRow
            style={styles.textRow}
            title={'24H Low'}
            value={low_24h_usd}
            type="price"
            styleText={styles.labelText}
          />
          <LabeledRow
            style={styles.textRow}
            title={'Available supply'}
            value={circulating_supply}
            type="price"
            styleText={styles.labelText}
          />
          <LabeledRow
            style={styles.textRow}
            title={'Total supply'}
            value={total_supply}
            type="price"
            styleText={styles.labelText}
          />
          <LabeledRow
            style={styles.textRow}
            title={'Fully diluted valuation'}
            value={fully_diluted_valuation_usd}
            type="price"
            styleText={styles.labelText}
          />
          <LabeledRow
            style={styles.textRow}
            title={'All-Time High'}
            value={ath_usd}
            type="price"
            styleText={styles.labelText}
          />
          <LabeledRow
            style={styles.textRow}
            title={'Since All-Time High'}
            value={ath_change_percentage_usd}
            type="percent"
            styleText={styles.labelText}
          />
          <LabeledRow
            style={styles.textRow}
            title={'All-Time High Date'}
            value={new Date(Date.parse(ath_date_usd)).toDateString()}
            type="default"
            styleText={styles.labelText}
          />
          <LabeledRow
            style={styles.textRow}
            title={'All-Time Low'}
            value={atl_usd}
            type="price"
            styleText={styles.labelText}
          />
          <LabeledRow
            style={styles.textRow}
            title={'Since All-Time Low'}
            value={atl_change_percentage_usd}
            type="percent"
            styleText={styles.labelText}
          />
          <LabeledRow
            style={styles.textRow}
            title={'All-Time Low Date'}
            value={new Date(Date.parse(atl_date_usd)).toDateString()}
            type="default"
            styleText={styles.labelText}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default CoinDetailsPriceChartScreen;

/*

*/
